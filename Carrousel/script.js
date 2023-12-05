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

        if (l == 0) {
            slider.style.left = `-${slider.offsetWidth - Cards}px`;
        } else {
            slider.style.left = `${l + walkSlider}px`;
        }
    }

    function ToTheRight() {
        console.log("ToTheRight");
        let l = window.getComputedStyle(document.querySelector(".slider"), null).left;
        l = parseInt(l.substring(0, l.length - 2));

        if (l == -(slider.offsetWidth-Cards)) {
            slider.style.left = `0px`;
        } else {
            slider.style.left = `${l - walkSlider}px`;
        }
    }

}