const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true});

const fruitSchema = new mongoose.Schema ({
  name: {
    type:String,
    required: [true, "PLease check dat NETRY, NO NAME SPECIFICED"]
  } , 
  rating: {
    type: Number,
    min: 1,
    max:10
  },
  review: String
})

const personSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema 
})


const Fruit = mongoose.model("Fruit", fruitSchema);

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit ( {
  name : "PineApple",
  rating : 8,
  review: "Best of bestt"
});

pineapple.save();

const person = new Person({
  name: "Amy",
  age:18,
  favouriteFruit: pineapple
})

// person.save();


const fruit = new Fruit ( {
  name : "Apple",
  rating : 34,
  review: "Great Fruit"
});

// fruit.save()

const kiwi = new Fruit ( {
  name : "Kiwi",
  socre : 10,
  review: "awesome Fruit"
});

const banana = new Fruit ( {
  name : "Banana",
  socre : 10,
  review: "awesome Fruit"
});

const john = new Person ( {
  name : "John",
  age: 30,
  favouriteFruit: banana
});

john.save();
//person.save();

// Fruit.insertMany([apple, kiwi, banana], function(err){
//   if (err) {
//     console.log(err);
//   }
//   else (
//     console.log("saved all new fruitss")
//   )
// } )
//fruit.save();

Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err)
  }else {

mongoose.connection.close();

    fruits.forEach(function(fruit){
      console.log(fruit.name);
    })
  }
})

Fruit.deleteMany({_id: "62b566796a6ff9d460861705"}, function(err) {
  if(err) {
    console.log(err)
  } else {
    console.log("success in deletion")
  }
})