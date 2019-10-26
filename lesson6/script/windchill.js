var temp = document.getElementById("temp").nodeValue;
var windSpeed = document.getElementById("windSpeed").nodeValue;
var chill;

if (temp <= 50 && windSpeed > 4.8) {
    chill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16));
} else {
    chill = 0;
}

document.getElementById("windChill").innerHTML = chill;