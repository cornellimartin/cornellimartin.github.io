var request = new XMLHttpRequest();
request.open("GET", "../data/temples.json");
var templesJSON = JSON.parse(request.responseText);
console.log(templesJSON); 
