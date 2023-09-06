const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect(process.env.DB_URL)

const UserSchema = new Schema({username: String, });

const User = mongoose.model("User", UserSchema);

const ExerciseSchema = new Schema({
  user_id: { type: String, required: true },
  description: String,
  duration: Number,
  date: Date,
  
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

app.use(cors())
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

/* You can make a GET request to /api/users to get a list of all users.
Failed: The GET request to /api/users returns an array. */

app.get("/api/users", async (req, res) => {
  const users = await User.find({}).select("_id username");
  if (!users) {
    res.send("No users");
  } else {
    res.json(users);
  }
})

/* You can POST to /api/users with form data username to create a new user.
Waiting: The returned response from POST /api/users with form data username will be an object with username and _id properties. */

app.post("/api/users", async (req, res) => {
    console.log(req.body)
    const userObj = new User({
      username: req.body.username
    })

    try{
        const user = await userObj.save()
        console.log(user);
        res.json(user)
    } catch(err) {
      console.log(err)
    }
  
})


/* You can POST to /api/users/:_id/exercises with form data description, duration, and optionally date. If no date is supplied, the current date will be used.
Waiting: The response returned from POST /api/users/:_id/exercises will be the user object with the exercise fields added. */

app.post("/api/users/:_id/exercises", async (req, res) => {
  const id = req.params._id;
  const { description, duration, date } = req.body

  try {
    const user = await User.findById(id)
      if(!user) {
        res.send("Could not find user")
      } else {
        const exerciseObj = new Exercise({
          user_id: user._id,
          description,
          duration,
          date: date ? new Date(date) : new Date()
        })
        /* Save */
        const exercise = await exerciseObj.save()
        res.json({
          _id: user._id,
          username: user.username,
          description: exercise.description,
          duration: exercise.duration,
          date: new Date(exercise.date).toDateString()
        })
      }
  } catch(err) {
    console.log(err)
    res.send("Error saving exercise. Try again!")
  }
  
})


/* You can make a GET request to /api/users/:_id/logs to retrieve a full exercise log of any user.
Failed: A request to a user's log GET /api/users/:_id/logs returns a user object with a count property representing the number of exercises that belong to that user. */

app.get("/api/users/:_id/logs", async (req, res) => {

  const { from, to, limit } = req.query;
  const id = req.params._id;
  const user = await User.findById(id);
  if(!user) {
    res.send("User not found")
    return;
  }
  
  let dateObj = {}

  if(from) {
    dateObj["$gte"] = new Date(from)
  }
  if(to) {
    dateObj["$lte"] = new Date(to)
  }

  let filter = {
    user_id: id
  }
  if(from || to) {
    filter.date = dateObj;
  }

  const exercises = await Exercise.find(filter).limit(+limit ?? 500)

  const log = exercises.map(e => ({
    description: e.description,
    duration: e.duration,
    date: e.date.toDateString()
    
  }))
  
  res.json({
    username: user.username,
    count: exercises.length,
    _id: user._id,
    log
  });

  
})


const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
