/*

- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for Washington DC (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.
*/
//console.log("connected");
'use strict';
// (function() {
   var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
   var apiKey = "f37a5d7db03617eaa9b082464aa58a40";
  //OnClick Event for the butto
  //Inside th function(){ Call getWeatherReport(cityName)}
  $('#getTemp').click(function(){
   // console.log("here");
    event.preventDefault();
    var cityName = $('#city').val();
 // consol.log(cityName);
    getWeatherReport(cityName);
  });
  function getWeatherReport(cityName){
  //  console.log(weatherUrl+ cityName +"appid"+ apiKey);
  $.ajax({
    
    url: weatherUrl + cityName + "&appid=" + apiKey,
    success: function(result) {
      console.log(result);// to exreact all informatiom from APi weather, keyword temp it is from API Libariy;
     // var fahrenheit = (9 / 5) * (result.main.temp - 273) + 32;
       $('#temp').text((result.main.temp-273));
      //  console.log((result.main.temp- 273) + 32);
      },
     error: function(result){
     console.error('error! can not read from api');
    } 
  });
}








