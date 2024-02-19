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
      // In the thread's replies array, an object will be saved with at least the properties _id, text, 
      // created_on, delete_password, & reported.
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
    
  app.route('/api/replies/:board');

};
