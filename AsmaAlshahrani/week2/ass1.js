//99 bottles of beer on the wall, 99 bottles of beer.
//Take one down and pass it around, 98 bottles of beer on the wall.
//let num=99;
//1 bottle of beer on the wall, 1 bottle of beer.
//Take one down and pass it around, no more bottles of beer on the wall.
//No more bottles of beer on the wall, no more bottles of beer.
let nmu;
var bottles = "bottles";
for ( nmu =99; nmu>= 0 ; nmu--){
    if (nmu>1){
        console.log(nmu+" " + bottles + " " + "of the beer on the wall," + nmu + " " +"bottles of beer." );
        nmu=nmu-1;
       console.log("Take one down and pass it around," + nmu + " " +"bottles of beer on the wall.");
    }
    else if(nmu==1){
        console.log(nmu+" " + "bottle of beer on the wall," + nmu + " " + "bottle of beer");
        console.log("Take one down and pass it around, on more bottles of beer on the wall.");
       }
      else if (nmu==0){
        console.log("No more bottles of beer on the wall, no more bottles of beer." );
      }
     
    }
