

window.addEventListener("scroll", function () {
    let topbar = document.querySelector(".top-first")
    let navbar= document.querySelector(".nav-main")
    let navcontent=document.querySelector(".nav-menu")
  let anchortags=document.getElementsByTagName("a")
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
        navbar.style.backgroundColor="#FFF"
        navcontent.style.color="black"
        navcontent.classList.add("padding")
        topbar.style.display="none"
        for (let i = 0; i < anchortags.length; i++) {
            anchortags[i].style.color = "black";
        }

    } else {
        navbar.classList.remove("scrolled");
        topbar.style.display="block"
        navbar.style.backgroundColor="#010F1C"
        navcontent.style.color="white"
        navcontent.classList.remove("padding")
        for (let i = 0; i < anchortags.length; i++) {
            anchortags[i].style.color = "white";
        }



    }
});


let swiper=new Swiper('.heroSwiper',{
    slidesPerView:1,
    loop:true,
    autoplay:{
        delay:1000,
    },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    effect: "fade",
    speed:2000,
});

let swiper2=new Swiper('.popularSwiper',{
    slidesPerView:4,
    loop:true,
    autoplay:{
        delay:1000,
    },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    speed:2000,
});

let swiper3=new Swiper('.chefSwiper',{
    slidesPerView:3,
    loop:true,
  
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    centeredSlides: true, 
});
function updateActiveSlide() {
    let activeSlide = document.querySelector(".swiper-slide-active .chef-image");


    document.querySelectorAll(".chef-image").forEach(el => el.classList.remove("active-bg"));

    
    if (activeSlide) activeSlide.classList.add("active-bg");
}


document.querySelector(".swiper-button-next").addEventListener("click", updateActiveSlide);
document.querySelector(".swiper-button-prev").addEventListener("click", updateActiveSlide);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        event.preventDefault(); 

        const targetId = this.getAttribute("href"); 
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});
let hasAnimated = false;
window.addEventListener("scroll",function(){  
let displayValue=document.querySelectorAll(".num");
let interval = 4000;
if(window.scrollY >= 50 &&!hasAnimated){
    hasAnimated=true;
displayValue.forEach(value =>{
    let startValue=0;
    let endValue=parseInt(value.getAttribute("data-val"));
    let duration=Math.floor(interval/endValue);
    let counter=setInterval(function(){
        startValue+=1;
        value.textContent=startValue;
        if(startValue == endValue){
            clearInterval(counter);
        }
    },duration)
})} 
})
