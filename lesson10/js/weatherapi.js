const apiURL = "https://api.openweathermap.org/data/2.5/weather?&id=5604473&units=imperial&APPID=dd66e694e0d52ba4a1b5e0c95a8a7857";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject); // For testing purposes
    document.getElementById("currentDescription").textContent = jsObject.weather[0].description;
    document.getElementById("high").textContent = jsObject.main.temp_max + " ºF";
    document.getElementById("humidity").textContent = jsObject.main.humidity + "%"
    document.getElementById("windSpeed").textContent = jsObject.wind.speed + " mph";

    var temp = jsObject.main.temp;
    var windSpeed = jsObject.wind.speed;
    var chill;

    if (temp <= 50 && windSpeed > 4.8) {
      chill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16));
      chill = Math.round(chill * 100) / 100;
      chill = chill + " *F";
    } else {
      chill = "N/A";
    }
    
    document.getElementById("windChill").innerHTML = chill;
    //const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  
    /* document.getElementById('imagesrc').textContent = imagesrc;
    document.getElementById('weather icon').setAttribute('src', imagesrc); 
    document.getElementById('weather icon').setAttribute('alt', desc); */
  });

/******************************FORECAST FOR 5 DAYS******************************/

  const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?&id=5604473&units=imperial&APPID=dd66e694e0d52ba4a1b5e0c95a8a7857";

  fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject2) => {
    console.log(jsObject2); // For testing purposes
    document.getElementsByClassName("days").firstChild.textContent; //Trying to get first child.
  });
