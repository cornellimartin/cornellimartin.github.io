var temp = parseFloat(document.getElementById("temp").innerHTML);
var windSpeed = parseFloat(document.getElementById("windSpeed").innerHTML);
var chill;

if (temp <= 50 && windSpeed > 4.8) {
    chill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16));
    chill = Math.round(chill * 100) / 100;
} else {
    chill = "N/A";
}

document.getElementById("windChill").innerHTML = chill;