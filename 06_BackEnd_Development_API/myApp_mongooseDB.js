require('dotenv').config();

let mongoose = require('mongoose');
/* mongoose.connect(process.env.MONGO_URI); */

let uri = 'mongodb+srv://carlosreinis:UsfnSWUxDiS9R83t@cluster0.alkwcws.mongodb.net/freecodecamp_db_1?retryWrites=true&w=majority'; 

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });


/* let Person; */

let personSchema = new mongoose.Schema({
  name : {type: String, required: true },
  age : Number,
  favoriteFoods : [String]
});

let Person = mongoose.model('Person', personSchema); 

var createAndSavePerson = function(done) {
  var carlos = new Person({ name: 'Carlos', age: 46, favoriteFoods: ['barbecue']})

  carlos.save(function(error, data) {
    if(error) return console.log(error);
    done(null, data)
});
};



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




const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
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
