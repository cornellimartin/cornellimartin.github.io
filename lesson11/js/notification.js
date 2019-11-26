var today = new Date();

if (today.getDay() == 5) {
    document.getElementById("notification").style.display = "block";
} else {
    document.getElementById("notification").style.display = "none";
}