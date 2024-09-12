let mobileView = document.querySelector(".mobileview");
let menuBtn = document.querySelector(".menu");
let body = document.querySelector("body");
let navlinks = document.querySelectorAll(".navlinks");
let arrow1 = document.querySelector(".arrow_1");
let arrow2 = document.querySelector(".arrow_2");
let arrow3 = document.querySelector(".arrow_3");

menuBtn.addEventListener("click", function () {
    mobileView.classList.toggle("show");
    body.classList.toggle("overflow-hidden");
    arrow1.classList.toggle("rotate1");
    arrow2.classList.toggle("rotate2");
    arrow3.classList.toggle("rotate3");
})

navlinks.forEach(link => {
    link.addEventListener("click", function () {
        mobileView.classList.toggle("show");
        body.classList.remove("overflow-hidden");
        arrow1.classList.toggle("rotate1");
        arrow2.classList.toggle("rotate2");
        arrow3.classList.toggle("rotate3");
    })
})