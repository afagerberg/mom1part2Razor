// DT191G moment 1 del 2, Alice Fagerberg
"use strict";

// Navigering - märk den aktiva navlänken
const current = location.href;
const navlinks = document.querySelectorAll("nav a");

for (let i = 0; i < navlinks.length; i++) {
    if (navlinks[i].href === current) {
        navlinks[i].className = "active";
    }
}

// Klocka.
function digitalClock() {

    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;

    let time = h + ":" + m + ":" + s;

    document.getElementById("timebox").innerHTML = "<p>" + time + "</p>";
    setTimeout(digitalClock, 1000);

    
}

digitalClock();

