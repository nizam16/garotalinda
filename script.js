// ===============================
// Loading Screen
// ===============================

window.addEventListener("load", function () {

    setTimeout(function () {

        document.getElementById("loader").style.display = "none";

    }, 800);

});


// ===============================
// Countdown Redirect
// ===============================

const countdown = document.getElementById("timer");

let timeLeft = 3;

// GANTI LINK INI
const redirectURL = "https://theresa-505231.happy-talking.org/yz/0kQXY3cY7KfNCq7w2B";

const timer = setInterval(function(){

    timeLeft--;

    countdown.innerText = timeLeft;

    if(timeLeft <= 0){

        clearInterval(timer);

        window.location.href = redirectURL;

    }

},1000);


// ===============================
// Tombol Assistir Agora
// ===============================

document.getElementById("ctaButton").addEventListener("click",function(){

    window.location.href = redirectURL;

});