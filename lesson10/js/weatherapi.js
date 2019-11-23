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
    var dayTemp = document.getElementsByClassName("temp");
    var forecastImg = document.getElementsByClassName("images");
    var imagesrc;
    console.log(dayTemp);
    console.log(forecastImg);
    for (i = 0; i < jsObject2.list.length; i++) {
      if (jsObject2.list[i].dt_txt.includes('18:00:00')) {
        console.log(jsObject2.list[i].main.temp);   
        console.log(dayTemp[i]);
        dayTemp[i].textContent = jsObject2.list[i].main.temp + "º F";
        imagesrc = 'https://openweathermap.org/img/wn/' + jsObject2.list[i].weather.icon + '@2x.png';
        forecastImg[i].setAttribute ('src', imagesrc);        
      }
    }
  });


 /******************************DAYS OF THE WEEK******************************/
  var days = document.getElementsByClassName("days");
  
  var today = new Date();
  var day;
  var i;

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  switch (today.getDay()) {
    case 0:
      day = "Sun";
      i = 0;
      break;
    case 1:
      day = "Mon";
      i = 1;
      break;
    case 2:
      day = "Tue";
      i = 3;
      break;
    case 3:
      day = "Wed";
      i = 4;
      break;
    case 4:
      day = "Thu";
      i = 5;
      break;
      case 5:
    day = "Fri";
    break;
      case 6:
      day = "Sat";
      i = 6;
  }

  for (x = 0; x < days.length; x++){
    if (i > 6) {
      i = 0;
    }
    days[x].textContent = daysOfWeek[i];
    i++;
  }
