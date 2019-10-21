let streetNumber = ['1234', '9875', '2231', '8873', '1413'];

let streetName = ['AA street', 'AB street', 'AC street', 'AD street', 'AE street'];

let cityName = ['Riyadh', 'Abah', 'Dammam', 'Makka'];

let stateName = ['KS', 'DN', 'BR','MH'];

let zipCode = ['12429','50063', '34659', '10002'];

function getRandom(n) {
return n[Math.floor((Math.random()* n.length))];
}
let address= (getRandom(streetNumber)+" " + getRandom(streetName)+", "+getRandom(cityName)+" "+getRandom(stateName)+" "+getRandom(zipCode));
console.log(address);
