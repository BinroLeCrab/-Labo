const flashlight = document.querySelector('#flashlight');

const lightOn = (x, y) => {
    console.log(x, y);
    flashlight.style.scale = 1;
    flashlight.style.top = y + 'px';
    flashlight.style.left = x + 'px';
};

document.addEventListener('click', (e) => {
    console.log(e.clientX, e.clientY);
    lightOn(e.clientX, e.clientY);
});

document.addEventListener('mousemove', (e) => {
    console.log(e.clientX, e.clientY);
    lightOn(e.clientX, e.clientY);
});

setInterval(() => {
    flashlight.style.scale = 0;
}, 10000);


