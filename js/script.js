
function showMessage() {
    alert("Welcome! You are learning JavaScript with ApexPlanet.");
}
function changeText() {
    document.getElementById("message").innerHTML =
        "I am improving my Web Development skills with ApexPlanet!";
}
function showDate() {
    document.getElementById("date").innerHTML =
        "Today's Date: " + new Date().toDateString();
}
