
$.getJSON("http://api.openweathermap.org/data/2.5/weather?id=833&units=imperial&appid=b1bf521b21fef6668d4a08dca50a3df7",

function(data){

console.log(data);

var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

var temp = Math.floor(data.main.temp);

var weather = data.weather[0].main;

console.log(icon);

$(' .icon').attr('src', icon);

$(' .weather').append(weather);

$(' .temp').append(temp);


});