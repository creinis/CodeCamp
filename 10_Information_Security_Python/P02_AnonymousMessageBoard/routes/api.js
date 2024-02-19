'use strict';

const mongoose = require('mongoose');
const mongodb = require('mongodb');
const { then } = require('../db_connect');
const dotenv = require('dotenv').config();

// DB Schema
const Schema = mongoose.Schema

// You can send a POST request to /api/threads/{board} with form data including text and delete_password. 
// The saved database record will have at least the fields _id, text, created_on(date & time), 
// bumped_on(date & time, starts same as created_on), reported (boolean), delete_password, & replies (array).
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
      // You can send a GET request to /api/threads/{board}. 
      // Returned will be an array of the most recent 10 bumped threads on the board with only the 
      // most recent 3 replies for each. The reported and delete_password fields will not be sent 
      // to the client.
      Thread.find({}, {delete_password: 0, reported: 0, replies: {$slice: 3}}).sort({bumped_on: -1}).limit(10)
      .then((d) => res.json(d))
      .catch(err => console.log(err))
    })
    .delete((req, res) => {
      // You can send a DELETE request to /api/threads/{board} and pass along the thread_id & delete_password 
      // to delete the thread. Returned will be the string incorrect password or success.
      let deleteThread = req.body
      Thread.findOneAndDelete({_id: deleteThread.thread_id, delete_password: deleteThread.deleteData},
        function(err, data) {
          if(err) {
            return res.status(400).json('cannot delete this thread')
          } else {
            return res.json('incorrect password')
          }
        })
    })
    .put((req, res) => {
      // You can send a PUT request to /api/threads/{board} and pass along the thread_id. 
      // Returned will be the string reported. The reported value of the thread_id will be changed to true.
      let putThread = req.body
      Thread.findOneAndUpdate({_id: putThread.thread_id}, {$set: {reported: true}})
      .then(() => res.json('success'))
      .catch(() => {
        return res.status(400).json('cannot report this thread.')
      })
    })



  app.route('/api/replies/:board')
    .post((req, res) => {
      // You can send a POST request to /api/replies/{board} with form data including text, delete_password, 
      // & thread_id. This will update the bumped_on date to the comment's date. In the thread's replies array, 
      // an object will be saved with at least the properties _id, text, created_on, delete_password, & reported.
      let postThread = req.body  // verificar put ou post?
      let postParams = req.params.board
      let newReplies = {
        _id: new mongodb.ObjectId(),
        text: postThread.text,
        created_on: new Date(),
        delete_password: postThread.delete_password,
        reported: false
      }
      Thread.findOneAndUpdate({_id: postThread.thread_id}, {$inc: {replycount: 1}, $push: {
        replies: {
          $each: [newReplies],
          $sort: {created_on: -1}
        }
      }})
      .then(() => res.redirect('/b/' + postParams + '/' + postThread.thread_id))
      .catch(err => console.log(err))
    })

};
