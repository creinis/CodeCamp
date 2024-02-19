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
      // POST: You can send a POST request to /api/replies/{board} with form data including text, 
      // delete_password, & thread_id. This will update the bumped_on date to the comment's date. 
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
    .delete((req, res) => {
      // DELETE: You can send a DELETE request to /api/threads/{board} and pass along the thread_id & delete_password 
      // to delete the thread. Returned will be the string incorrect password or success.
      let deleteThread = req.body
      console.log("Deleting Thread: ", deleteThread.thread_id); 
      Thread.findOneAndDelete({
        _id: mongodb.ObjectId(deleteThread.thread_id),
        delete_password: deleteThread.delete_password,
      },
        function(err, data) {
          if(err) {
            console.log("Error deleting thread: ", err);
            return res.status(400).json('cannot delete Thread data')
          } else if (data) {
            console.log("Seccess deleting thread")
            console.log(typeof(res.json));
            return res.json('success')
          } else {
            console.log("Incorrect password while deleting thread")
            console.log(typeof(res.json));
            return res.json('incorrect password')
          }
        }
      )
    })
    .put((req, res) => {
      // PUT: You can send a PUT request to /api/threads/{board} and pass along the thread_id. 
      // Returned will be the string reported. The reported value of the thread_id will be changed to true.
      let putThread = req.body
      Thread.findOneAndUpdate({_id: putThread.thread_id}, {$set: {reported: true}})
        .then(() => res.json('success'))
        .catch(() => { return res.status(400).json('cannot update threat')})
    })
    
  // REPLIES
  app.route('/api/replies/:board')
    .post((req, res) => {
      // POST: You can send a POST request to /api/replies/{board} with form data including text, delete_password, 
      // & thread_id. This will update the bumped_on date to the comment's date.
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
          "replies.delete_password": 0,
          "replies.reported": 0
        }
      )
        .then((d) => res.json(d))
        .catch(err => console.log(err))
    })
    .delete((req, res) => {
      // DELETE: You can send a DELETE request to /api/replies/{board} and pass along the thread_id, reply_id, 
      // & delete_password. Returned will be the string incorrect password or success. On success, the text of 
      // the reply_id will be changed to [deleted].
      let deleteThread = req.body
      console.log("Deleting Reply: ", deleteThread.reply_id);
      Thread.findOneAndUpdate(
        {
          _id: mongodb.ObjectId(deleteThread.thread_id),
          'replies._id': mongodb.ObjectId(deleteThread.reply_id),
          'replies.delete_password': deleteThread.delete_password
        },
        {
          $set: {"replies.$.text": '[deleted]'}
        }
      )
        .then((d) => {
          if(d){
            console.log("Success delete reply")
            return res.json('success')
          } else {
            console.log("Incorrect password while delete reply")
            return res.json('incorrect password')
          }
        })
        .catch((err) => {
          console.log("Error deleting Reply: ", err)
          res.status(400),json('cannot delete')
        })
    })
    .put((req, res) => {
      // PUT: You can send a PUT request to /api/replies/{board} and pass along the thread_id & reply_id. 
      // Returned will be the string reported. The reported value of the reply_id will be changed to true.
      let putThread = req.body
      console.log("Reporting Reply: ", putThread.reply_id);
      Thread.findOneAndUpdate(
        {
          _id: putThread.thread_id,
          'replies._id': mongodb.ObjectId(putThread.reply_id)
        },
        {
          $set: {'replies.$.reported': true}
        }
      )
        .then(() => {
          console.log("Success - Reported Reply");
          res.json('reported')
        })
        .catch(() => {
          console.log("Error Reporting Reply: ", err)
          return res.status(400).json('cannot report the reply thread');
        })
    })

};
