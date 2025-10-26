// Select input box and paragraph
var guessnumber = document.getElementById("guessnumber");
var p = document.getElementById("p");

// Generate a random number between 1 and 10
var rn = Math.floor(Math.random() * 10) + 1;

function check() {
    var enterednumber = Number(guessnumber.value); // Convert input to number
    if (rn === enterednumber) {
        p.textContent = "Right!";
        console.log("Right");
    } else {
        p.textContent = "Wrong! Try again.";
        console.log("Wrong");
    }
}