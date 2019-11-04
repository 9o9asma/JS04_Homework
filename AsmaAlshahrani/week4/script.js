console.log("JS connected"); // this to check that our script is connected to out HTML

var body = document.body.style.backgroundColor = "#92a8d1";
document.body.style.fontFamily = "Arial;sans-serif";

var nickname = document.getElementById("nickname");
console.log(nickname);
nickname.innerHTML = "Hello World!";
nickname.style.color="#ff0000";

var favorites= document.getElementById("favorites");
console.log(favorites);
favorites.innerHTML="Riyadh";
favorites.style.color="magenta";

var hometown=document.getElementById("hometown");
console.log(hometown);
hometown.innerHTML="Riyadh";
hometown.style.color="blue";



/*document.querySelector("#nickname").style.color = "#ff0000";
document.querySelector("#favorites").style.color = "magenta";
document.querySelector("#hometown").style.color = "blue";*/
  


    // query select body 
// change the font family of the body to 'Arial, sans-serif' Hint: use .style to acess CSS properties
// change the backgroundColor to a color of your choice
// qurey select the ID nickname
//add some value to nickname Hint: innerHTML
// query select favorites byID
// query select hometown byID
// feed both favorites and homwtown with values that represents you i.e hometown.innerHTML = 'Riyadh';

//change the color of all selectors to colors of your choice, it better be good LOL

// https://www.w3schools.com/jsref/prop_style_color.asp