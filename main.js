// sets the date were counting to
let countDownDate = new Date("feb 5, 2021 15:37:25").getTime();
let x = setInterval(function () {
    let now = new Date().getTime();
    // distance between todays date and requested date
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById('counter').innerHTML = `${days}D ${hours}H ${minutes}M ${seconds}s `;
    if (distance < 0) {
        clearInterval(x);
        document.getElementById('counter').innerHTML = "Welcome To Mardi Gras 2021";
    }
}, 1000);