/*Work with a partner to create a monkey object, which has the following properties:
* name
* species
* foodsEaten
And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.
Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.
Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).
*/

let monkey1={
    name: 'monkey1',
    species: 'Blue Monkey',
    foodsEaten:['fruits']
};
let monkey2={
    name: 'monkey2',
    species: 'Squirrel Monkey',
    foodsEaten:['bugs']
};

let monkey3={
    name: 'monkey3',
    species: 'Howler Monkey',
    foodsEaten:['nuts']
};
monkey1.eatSomething= function (food1) {
  return monkey1.foodsEaten.push(food1);
}
monkey2.eatSomething= function (food2) {
  return monkey2.foodsEaten.push(food2);
}
monkey3.eatSomething= function (food3) {
  return monkey3.foodsEaten.push(food3);
}
  monkey1.eatSomething('figs');
  monkey2.eatSomething('insects');
  monkey3.eatSomething('flowers');

  function introduce(){
    monkey1.name=name;
    monkey1.species=species;
    monkey1.foodsEaten=foodsEaten;
   }
   console.log("The"+" "+monkey1.name+" is "+monkey1.species+", "+"and has eaten "+ monkey1.foodsEaten); 

 // console.log('----------------------------------------');
 function introduce(){
    monkey2.name=name;
    monkey2.species=species;
    monkey2.foodsEaten=foodsEaten;
   }
   console.log("The"+" "+monkey2.name+" is "+monkey2.species+", "+"and has eaten "+ monkey2.foodsEaten);

// console.log('----------------------------------------');
   function introduce(){
    monkey3.name=name;
    monkey3.species=species;
    monkey3.foodsEaten=foodsEaten;
   }
   console.log("The"+" "+monkey3.name+" is "+monkey3.species+", "+"and has eaten "+ monkey3.foodsEaten);






 /*function Monkey(name,species,foodsEaten) {
   this.name = name
  this.species = species
   this.foodsEaten = foodsEaten
 }

 Monkey.prototype.eatSomething = function(food) {
   return this.foodsEaten.push(food)
 }

 Monkey.prototype.introduce = function() {
   return this.name + ' is a '+ this.species + '. It has eaten ' + this.foodsEaten
}

 var monkey1 = new Monkey('monkey1', 'orang utan', ['banana'])
 var monkey2 = new Monkey('monkey2', 'primate', ['peanuts'])
 var monkey3 = new Monkey('monkey3', 'gorilla', ['oranges'])
 monkey1.eatSomething('peanuts')
 monkey2.eatSomething('oranges')
 monkey3.eatSomething('banana')

 console.log(monkey1.introduce())
console.log(monkey2.introduce())
console.log(monkey3.introduce())


*/