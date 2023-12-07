window.addEventListener("load",run,false);

function run() {
    // console.log(window.getComputedStyle(document.querySelector(".slider"), null).backgroundColor);

    const slider = document.querySelector(".slider");
    const right = document.querySelector("#right");
    const left = document.querySelector("#left");

    let Cards = document.querySelector(".item").offsetWidth;
    let Gap = window.getComputedStyle(slider, null).gap;
    Gap = parseInt(Gap.substring(0, Gap.length - 2));
    let walkSlider = Cards + Gap;


    right.addEventListener("click", ToTheRight);
    left.addEventListener("click", ToTheLeft);

    function ToTheLeft() {
        console.log("ToTheLeft");
        let l = window.getComputedStyle(document.querySelector(".slider"), null).left;
        l = parseInt(l.substring(0, l.length - 2));

        let arrivée = l + walkSlider;

        console.log(l);

        if (arrivée > 0 || l == 0) {
            console.log("retour origine");
            slider.style.left = `-${slider.offsetWidth - Cards}px`;
        } else {
            slider.style.left = `${l + walkSlider}px`;
        }
    }

    function ToTheRight() {
        console.log("ToTheRight");
        let l = window.getComputedStyle(document.querySelector(".slider"), null).left;
        l = parseInt(l.substring(0, l.length - 2));

        let max = - slider.offsetWidth + Cards;

        let arrivée = l - walkSlider;

        console.log(max);
        console.log(l);

        if (arrivée < max || l == max) {
            console.log("retour droite");
            slider.style.left = `0px`;
        } else {
            slider.style.left = `${l - walkSlider}px`;
        }
    }

}