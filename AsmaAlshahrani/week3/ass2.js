// 1. Suppose that we wanted to create a browser-based app that manages car sales. Describe properties and methods for a car entity (object literal) based on the specifications below. Store it in the car variable.
// SPECIFICATIONS
// Description: Our app manages car sales.
// Entity: Car
// Properties: make, model, year
// Methods: drive, brake, park (these should console.log the make of the car and the method. For example - "Mazda is in park" or "Mazda is breaking")

// Replace null with your answer
console.log("Question 1");
let Car = {
    make: "Toyota",
    model: "Glanza",
    year:"2019",
    drive:function (){
 console.log(Car.make+ " "+"is driving");
},
 brake:function(){
    console.log(Car.make+" "+"is breaking");
},
 park:function(){
    console.log(Car.make+" "+"is in park.");  
}
};
Car.park();
Car.brake();
Car.drive();


  
  // ======================================================
  
  //Create an Object literal that lines up with the following description. Store it in the variable 'pet_owner', below. Be sure to give it reasonable values for each of its properties.

  // 'Owner'
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'owner' has:
  // - a name
  // - an address
// Answer Starts Here
console.log("Question 2");
let owner={
name:'veterinary clinic',
address:{houseNumber:123,StreetName:'AA street', city:'Riyadh'}
};
var pet_owner=owner;
console.log(pet_owner);
// Answer Ends Here
  
  
  
  
  // 3. Create an object literal that lines up with the following `pet` entity description. Store it in the variable `pet`, below.
  
  // Entity: Pet
  // Attributes: name, species, breed, vocalization
  // Methods: vocalize (it should console.log the name of the dog and the vocalization)
  
  // Replace null with your answer
  console.log("Question 3");
  let pet = {
    name: "Hound",
    species: "dog",
    breed: "Sporting ",
    vocalization:'bark',
    vocalize:function(){
      console.log(pet.name, pet.vocalization);
    }
}
var pet1=pet.vocalize ();

