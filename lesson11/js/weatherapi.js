const apiURL = "https://api.openweathermap.org/data/2.5/weather?&id=5604473&units=imperial&APPID=dd66e694e0d52ba4a1b5e0c95a8a7857";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.getElementById("currentDescription").textContent = jsObject.weather[0].description;
    document.getElementById("high").textContent = jsObject.main.temp_max + " ºF";
    document.getElementById("humidity").textContent = jsObject.main.humidity + "%"
    document.getElementById("windSpeed").textContent = jsObject.wind.speed + " mph";

    var temp = jsObject.main.temp;
    var windSpeed = jsObject.wind.speed;
    var chill;

    if (temp <= 50 && windSpeed > 3) {
      chill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16));
      chill = Math.round(chill * 100) / 100;
      chill = chill + " *F";
    } else {
      chill = "N/A";
    }

    document.getElementById("windChill").innerHTML = chill;
  });

/******************************FORECAST FOR 5 DAYS******************************/

const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?&id=5604473&units=imperial&APPID=dd66e694e0d52ba4a1b5e0c95a8a7857";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject2) => {
    var counter = 0;
    var dayTemp = document.getElementsByClassName("temp");
    var forecastImg = document.getElementsByClassName("forecastImg");
    var days = document.getElementsByClassName("days");
    var imagesrc;
    for (i = 0; i < jsObject2.list.length; i++) {
      if (jsObject2.list[i].dt_txt.includes('18:00:00')) {
        dayTemp[counter].textContent = jsObject2.list[i].main.temp + "º F";
        imagesrc = 'https://openweathermap.org/img/wn/' + jsObject2.list[i].weather[0].icon + '@2x.png';
        forecastImg[counter].setAttribute ('src', imagesrc);     
        var day = new Date(jsObject2.list[i].dt_txt); 
        days[counter].textContent = daysOfWeek[day.getDay()];  
        counter++;
      }
    }
  });
