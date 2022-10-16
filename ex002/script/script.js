const body = document.querySelector("body");
const menubar = body.querySelector(".menu-bar");
const toggle = body.querySelector(".toggle");
const main = body.querySelector("#main")

    toggle.addEventListener("click", () =>{
        menubar.classList.toggle('close');
        main.classList.toggle('ajust')
    });
