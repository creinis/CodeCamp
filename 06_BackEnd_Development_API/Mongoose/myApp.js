require('dotenv').config();


/* mongoose.connect(process.env.MONGO_URI); */
/* ## 1 */
let mongoose = require('mongoose');
let uri = 'mongodb+srv://carlosreinis:RrH41LrPRe3vJnm7z0mfHU6N@cluster0.alkwcws.mongodb.net/freecodecamp_db_1?retryWrites=true&w=majority'; 

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });


/* ## 2 */

let personSchema = new mongoose.Schema({
  name : {type: String, required: true },
  age : Number,
  favoriteFoods : [String]
});

/* ## 3 */

let Person = mongoose.model('Person', personSchema); 

var createAndSavePerson = function(done) {
  var carlos = new Person({ name: 'Carlos', age: 46, favoriteFoods: ['barbecue']})

  carlos.save(function(error, data) {
    if(error) return console.log(error);
    done(null, data)
});
};

/* ## 4 */

let arrayOfPeople = [
  {name: 'paulo', age: 45 , favoriteFoods: ['feijoada']},
  {name: 'josé', age: 12 , favoriteFoods: ['mingau']},
  {name: 'carolina', age: 41 , favoriteFoods: ['pringles']},
  {name: 'isaura', age: 65 , favoriteFoods: ['peixe']},
];

var createManyPeople = function(arrayOfPeople, done) {

  Person.create(arrayOfPeople, (error, createdPeople) => {
    if(error) {
      console.log(error)
    } else {
      done(null, createdPeople)
    }
  });
};

/* ## 5 */

/* Person.find({name: 'Umberto'}, (error, data) => {
  if(error){
    console.log(error)
  } else {
    console.log(data)
  }
})  */

var findPeopleByName = function(personName, done) {

Person.find({name: personName}, (error, arrayOfResults) => {
    if(error){
    console.log(error)
  } else {
    done(null, arrayOfResults)
  }
  });
};

/* ## 6 */

const findOneByFood = function(food, done) {

  Person.findOne({favoriteFoods : {$all : [food]}}, (error, result) => {
    if(error){
    console.log(error)
  } else {
    done(null, result)
  }
  });
};

/* ## 7 */

const findPersonById = function(personId, done) {
  Person.findById(personId, (error, result) => {
    if(error){
        console.log(error)
      } else {
        done(null, result)
    }
  });
};
  
  
/* ## 8 */

var findEditThenSave = function(personId, done) {
  var foodToAdd = "hamburger";

  Person.findById(personId, (error, result) => {
    if(error){
        console.log(error)
      } else {
        result.favoriteFoods.push(foodToAdd)
        result.save((error, updatedResult) => {
          if(error){
            console.log(error)
          }else{
            done(null, updatedResult)
          }
      })
    }
  })
};


/* ## 9 */

var findAndUpdate = function(personName, done) {
  var ageToSet = 20;

  Person.findOneAndUpdate({name: personName}, {age: ageToSet}, {new: true}, (error, updatedRecord) => {
    if(error){
      console.log(error)
    } else {
      done(null, updatedRecord)
    }
  })
};


/* ## 10 */

var removeById = function(personId, done) {

  Person.findByIdAndRemove(personId, (error, deletedRecord) => {
    if(error){
      console.log(error)
    } else {
      done(null, deletedRecord)
    }
  })
};


/* ## 11 */

var removeManyPeople = function(done) {
  var nameToRemove = "Mary";

  Person.remove({name: nameToRemove}, (error, JSONStatus) => {
    if(error){
      console.log(error)
    } else {
      done(null, JSONStatus)
    }
  })
};


/* ## 12  Powerfull filtering */

var queryChain = function(done) {
  var foodToSearch = "burrito";

    Person.find({favoriteFoods: {$all: [foodToSearch]}})
      .sort({name : 'asc'})
      .limit(2)
      .select('-age')
      .exec((error, filteredResults) => {
        if(error){
          console.log(error)
        } else {
          done(null, filteredResults)
        }
      })
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
