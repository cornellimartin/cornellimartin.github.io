var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Montevideo,UY&units=imperial&APPID=dd66e694e0d52ba4a1b5e0c95a8a7857";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    var temp = document.getElementsByClassName("temp");
    temp[0].textContent = jsObject.main.temp + " ºF";
  })

var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Buenos Aires&units=imperial&APPID=dd66e694e0d52ba4a1b5e0c95a8a7857";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    var temp = document.getElementsByClassName("temp");
    temp[1].textContent = jsObject.main.temp + " ºF";
  })

var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Sao Paulo&units=imperial&APPID=dd66e694e0d52ba4a1b5e0c95a8a7857";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    var temp = document.getElementsByClassName("temp");
    temp[2].textContent = jsObject.main.temp + " ºF";
  })

var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Gilbert&units=imperial&APPID=dd66e694e0d52ba4a1b5e0c95a8a7857";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    var temp = document.getElementsByClassName("temp");
    temp[3].textContent = jsObject.main.temp + " ºF";
  })