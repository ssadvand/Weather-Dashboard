var button = document.querySelector("#search-button");
console.log(button);
var cityInput = document.querySelector("#city-input");
console.log(cityInput);
let date = new Date();
let city = $("#searchTerm").val();

button.addEventListener("click", function (){
    
    thunderPants()
})
cityInput.addEventListener("keydown", function (event){
    if(event.key=== "Enter"){
        
        thunderPants()
    }
})
function thunderPants(){
   var cities = JSON.parse(localStorage.getItem("Cities")? localStorage.getItem("Cities"):"[]");
    cities.push(cityInput.value)
    console.log("List: Cities",cities)
    localStorage.setItem("Cities",JSON.stringify(cities));
    console.log(cities[0])
    //console.log(localStorage.getItem("Cities"));
    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${API}`
    $.ajax(
       queryURL 
    ).done(function(response){
        console.log("List: Weather INFO",response)
        var freedomUnits = ((response.main.temp-273.15)*1.8)+32
        var windy = (response.wind.speed*2)
        var ohTheHumidity =(response.main.humidity)
        $(".city-name").text(response.name)
        $(".temp").text("Temperature: " + freedomUnits.toFixed(0)+ "℉")
        $(".wind").text("Wind Speed: "+ windy.toFixed(0)+ "MPH")
        $(".humidity").text(`Humidity ${ohTheHumidity} %`)
        var lon = (response.coord.lon)
        var lat = (response.coord.lat)
        redSun(lon,lat) 
        oracle()
      });
      }
function redSun (lon,lat){

  var queryURL = `http://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${API}`
  $.ajax(
    queryURL
  ).done(function(response){
    console.log("no powers",response)
    var kryptonite = (response.value)
    $(".UV").text(`UV Index: ${kryptonite} `)
    
  })
}
function oracle (cities){
        var queryURL = `http://api.openweathermap.org/data/2.5/forecast?q=${cityInput.value}&appid=${API}`
        $.ajax(
          queryURL
        ).done(function(response){
          console.log("Delphi",response)
          var holyCattle = (response.list[3,11,19,27,35])
          $(".Delphi").text(`5 Day Forecast: ${holyCattle}`)
          var freedomUnits = ((response.main.temp-273.15)*1.8)+32
          var windy = (response.wind.speed*2)
          var ohTheHumidity =(response.main.humidity)
          $(".city-name").text(response.name)
          $(".temp").text("Temperature: " + freedomUnits.toFixed(0)+ "℉")
          $(".wind").text("Wind Speed: "+ windy.toFixed(0)+ "MPH")
          $(".humidity").text(`Humidity ${ohTheHumidity} %`)
          [3,11,19,27,35].forEach(index => { 
            
          });
        })
      }

