window.addEventListener("load",run,false);

function run() {
    changeTheme()
    // localStorage.clear();

    function changeTheme() {
        let info = localStorage.getItem("theme");
        console.log(info);

        if (info == null) {
            localStorage.setItem("theme", "clair");
        }

        let body = document.querySelector("body");
        body.classList.forEach(function (cl) {
            body.classList.remove(cl);
        });
        body.classList.add(info);
    }

    const inMode = document.getElementById("mode");
    inMode.addEventListener("click", checkMode);

    function checkMode() {
        if (inMode.checked == true) {
            localStorage.setItem("theme", "sombre");
            changeTheme();
        } else {
            localStorage.setItem("theme", "clair");
            changeTheme();
        }
    }
}