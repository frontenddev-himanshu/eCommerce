// res-nav
let nav = document.querySelector(".nav-links");
let hamb = document.querySelector(".bar");

let lll = 0;

hamb.addEventListener("click", function () {

    if (lll == 0) {
        nav.style.visibility = "visible";
        nav.style.opacity = 1;
        nav.style.left = 0;
        lll = 1;
    }

    else {
        nav.style.visibility = "hidden";
        nav.style.opacity = 0;
        nav.style.left = -50;
        lll = 0;
    }


})




// fixed btn
let jump = document.querySelector('.fixed-btn')

window.addEventListener("scroll", function(){
    if(this.window.pageYOffset > 100) {
        jump.classList.add("active");
    }
    else{
        jump.classList.remove("active");
    }

    
});



// swiper js
const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });