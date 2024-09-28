// ---------------- SCROLL SECTION ACTIVE ---------------
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


// ---------------- CHANGE BACKGRUOUND HEADER ----------------
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


// ---------------- COURSES SECTION ---------------
$(".courses-carousel").owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    dots:false,
    nav:true,
    navText:[$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
    responsive:{
        0:{
            items:1
        },
        700:{
            items:2
        },
        1000:{
            items:3
        }
    }
});



// --------------- TESTIMONIAL SECTION ----------------
const slides = document.querySelector(".slider").children;
const indicatorImages = document.querySelector(".slider-indicator").children;

for(let i=0; i<indicatorImages.length; i++){
    indicatorImages[i].addEventListener("click", function(){
        // console.log(this.getAttribute("data-id"))
        for(let j=0; j<indicatorImages.length; j++){
            indicatorImages[j].classList.remove("active");
        }
        this.classList.add("active");
        const id=this.getAttribute("data-id");
        // remove class active from all slides
        for(let j=0; j<slides.length; j++){
            slides[j].classList.remove("active");
        }
        slides[id].classList.add("active");
    })
}


// ------------------ TEAM SECTION -------------------

