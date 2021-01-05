var button = document.querySelector("#search-button");
console.log(button);
var cityInput = document.querySelector("#city-input");
console.log(cityInput);


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
        $(".city-name").text(response.name)
        $(".temp").text(freedomUnits.toFixed(4))
        $(".wind").text(windy.toFixed(4))
    })
}

