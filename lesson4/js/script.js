var today = new Date();
var day;
var month;

switch (today.getDay()) {
    case 0:
    day = "Sunday";
    break;
    case 1:
    day = "Monday";
    break;
    case 2:
        day = "Tuesday";
    break;
    case 3:
    day = "Wednesday";
    break;
    case 4:
    day = "Thursday";
    break;
    case 5:
    day = "Friday";
    break;
    case 6:
    day = "Saturday";
    
}

switch(today.getMonth()){
    case 1: month = "January";
        break;
    case 2: month = "February";
        break;
    case 3: month = "March";
        break;
    case 4: month = "April";
        break;
    case 5: month = "May";
        break;
    case 6: month = "June"; 
        break;
    case 7: month = "July";
        break;
    case 8: month = "August";
        break;
    case 9: month = "September";
        break;
    case 10: month = "October";
        break;
    case 11: month = "November";
        break;
    case 12: month = "December";
        break;
    }

var date =  day + ", " + today.getDate() + " " + month + " " + today.getFullYear();
document.getElementById("currentDate").innerHTML = date;

function toggleMenu() {
    document.getElementById("navList").classList.toggle("show");
}