'use strict';

const mongoose = require('mongoose');
const mongodb = require('mongodb');
require('../db_connect');

// DB Schema
const Schema = mongoose.Schema

const threadSchema = new Schema({
  text: {type: String, required: true},
  reported: {type: Boolean, required: true, default: false},
  delete_password: {type: String, required: true},
  replycount: {type: Number, default: 0},
  replies: [Object],
}, {
  timestamps: {
    createdAt: 'created_on',
    updatedAt: 'bumped_on'
  }
})

const Thread = mongoose.model('Thread', threadSchema)


module.exports = function (app) {
  
  // THREADS
  app.route('/api/threads/:board')
    .post((req, res) => {
      let postThread = req.body
      let newThread = new Thread({
        text: postThread.text,
        delete_password: postThread.delete_password,
      })
      newThread.save()
        .then(() => res.redirect('/b/' + postThread.board))
        .catch(err => console.log(err))
    })
    .get((req, res) => {
      // GET: You can send a GET request to /api/threads/{board}. 
      // Returned will be an array of the most recent 10 bumped threads on the board with only the 
      // most recent 3 replies for each. The reported and delete_password fields will not be sent 
      // to the client.
      Thread
        .find({}, {delete_password: 0, reported: 0, 'replies.delete_password': 0, 'replies.reported': 0})
        .sort({bumped_on: -1})
        .limit(10)
        .then((d) => res.json(d))
        .catch(err => console.log(err))
    })
    .delete(async (req, res) => {
      try {
        const { thread_id, delete_password } = req.body;
        console.log(`Deleting thread with id ${thread_id} and password ${delete_password}`);
        const result = await Thread.findOneAndDelete({ _id: thread_id, delete_password: delete_password });
        console.log('findOneAndDelete result:', result);
        if (result) {
          res.send('success');
        } else {
          console.log('Incorrect password while deleting thread');
          res.status(401).send('incorrect password');
        }
      } catch (error) {
        console.error('Error in DELETE /api/threads/:board:', error);
        res.status(500).send('internal server error');
      }
    })
    .put(async (req, res) => {
      try {
        const { thread_id } = req.body;
        let thread = await Thread.findById(thread_id);
        if (!thread) {
          return res.status(404).send('No thread found with this id');
        }
        thread.reported = true;
        await thread.save();
        console.log('reported');
        res.send('reported');
      } catch (error) {
        console.error(error);
        res.status(500).send('internal server error');
      }
    })
    
  // REPLIES
  app.route('/api/replies/:board')
  .post((req, res) => {
    let postThread = req.body
    let postParams = req.params.board
    let newReplies = {
      _id: new mongodb.ObjectId(),
      text: postThread.text,
      created_on: new Date(),
      delete_password: postThread.delete_password,
      reported: false,
    }
    Thread.findOneAndUpdate({_id: postThread.thread_id}, {$inc: {replycount: 1}, $push: {
      replies: {
        $each: [newReplies],
        $sort: {created_on: -1}
      }
    }})
      .then(() => res.redirect('/b/' + postParams + '/' + postThread.thread_id))
      .catch(() => console.log(err))

  })
  .get((req, res) => {
    // GET: You can send a GET request to /api/replies/{board}?thread_id={thread_id}. 
    // Returned will be the entire thread with all its replies, also excluding the same fields from the 
    // client as in the THREADS routes suit.
    let postThread = req.query.thread_id;
    Thread.findOne(
      {_id: postThread},
      {
        delete_password: 0,
        reported: 0,
        __v: 0,
        'replies.delete_password': 0,
        'replies.reported': 0
      }
    )
      .then((d) => res.json(d))
      .catch(err => console.log(err))
  })
  .delete(async (req, res) => {
    try {
      let { thread_id, reply_id, delete_password } = req.body;
      let updateResult = await Thread.findOneAndUpdate(
        {
          _id: thread_id,
          replies: {
            $elemMatch: {
              _id: reply_id,
              delete_password: delete_password
            }
          }
        },
        {
          $set: {
            "replies.$.text": "[deleted]"
          }
        }
      );
      if (!updateResult) {
        return res.status(403).send('incorrect password');
      }
      console.log('Success - Deleted Reply');
      res.send('success');
    } catch (error) {
      console.log('Error Deleting Reply: ', error);
      return res.status(500).send('internal server error');
    }
  })

  .put(async (req, res) => {
    try {
      let { thread_id, reply_id } = req.body;
      let thread = await Thread.findById(thread_id);
      if (!thread) {
        return res.status(404).send('No thread found with this id');
      }
      let reply = thread.replies.find(reply => reply._id.toString() === reply_id);
      if (!reply) {
        return res.status(404).send('No reply found with this id');
      }
      reply.reported = true;
      await thread.save();
      console.log('Success - Reported Reply');
      res.send('reported');
    } catch (error) {
      console.log('Error Reporting Reply: ', error)
      return res.status(500).send('internal server error');
    }
  })
};
