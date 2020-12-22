var button = document.querySelector("#search-button");
console.log(button);
var cityInput = document.querySelector("#city-input");
console.log(cityInput);


button.addEventListener("click", function (){
    console.log(cityInput.value)
    thunderPants()
})
cityInput.addEventListener("keydown", function (event){
    if(event.key=== "Enter"){
        console.log(cityInput.value)
        thunderPants()
    }
})
function thunderPants(){
    console.log("puns")
    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${API}`
    $.ajax(
       queryURL 
    ).done(function(response){
        console.log(response)
    })
}