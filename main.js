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

// lightbox
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox)


const images = document.querySelectorAll('img');
images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active');
        const img = document.createElement('img');
        img.src = image.src;
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
    })
})

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove('active')
})