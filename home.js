var h1 = document.querySelector("h1");
var isPurple = false;

setInterval(function() {
    if (isPurple) {
        h1.style.color = "rgba(218, 59, 213, 0.49)";
    }   else {
        h1.style.color = "rgba(150, 44, 146, 0.49)";
    }
    isPurple = !isPurple;
}, 1000);

var miniLogo = document.getElementById("miniLogo");
var isPurp = false;

setInterval(function() {
    if (isPurp) {
        miniLogo.style.color = "rgba(218, 59, 213, 0.9)";
    }   else {
        miniLogo.style.color = "rgba(150, 44, 146, 0.9)";
    }
    isPurp = !isPurp;
}, 1000);
