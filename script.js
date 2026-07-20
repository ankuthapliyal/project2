/*=========================================
        PRELOADER
=========================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("preloader");

    if(loader){

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

        },800);

    }

});


/*=========================================
        STICKY NAVBAR
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});


/*=========================================
        MOBILE MENU
=========================================*/

const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

if(menuToggle){

menuToggle.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){

        menuToggle.innerHTML='<i class="fas fa-times"></i>';

    }else{

        menuToggle.innerHTML='<i class="fas fa-bars"></i>';

    }

});

}


/*=========================================
        CLOSE MENU
=========================================*/

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

    navLinks.classList.remove("active");

    if(menuToggle){

        menuToggle.innerHTML='<i class="fas fa-bars"></i>';

    }

});

});


/*=========================================
        SCROLL PROGRESS BAR
=========================================*/

window.addEventListener("scroll",()=>{

const progress=document.getElementById("progress-bar");

if(progress){

const totalHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const progressHeight=(window.pageYOffset/totalHeight)*100;

progress.style.width=progressHeight+"%";

}

});

/*=========================================
        HERO TEXT ANIMATION
=========================================*/

const heroTitle = document.querySelector(".hero h1");

if(heroTitle){

heroTitle.animate(

[
    {
        opacity:0,
        transform:"translateY(60px)"
    },
    {
        opacity:1,
        transform:"translateY(0px)"
    }
],

{
    duration:1500,
    fill:"forwards"
}

);

}


/*=========================================
        HERO BUTTON ANIMATION
=========================================*/

const heroBtn=document.querySelector(".hero .btn");

if(heroBtn){

heroBtn.animate(

[
{
transform:"scale(.8)",
opacity:0
},

{
transform:"scale(1)",
opacity:1
}

],

{
duration:1800,
fill:"forwards"
}

);

}


/*=========================================
        COUNTER ANIMATION
=========================================*/

const counters=document.querySelectorAll(".counter");

const startCounter=(counter)=>{

const target=+counter.getAttribute("data-target");

let count=0;

const speed=target/200;

const update=()=>{

count+=speed;

if(count<target){

counter.innerHTML=Math.ceil(count);

requestAnimationFrame(update);

}
else{

counter.innerHTML=target;

}

};

update();

};

const counterObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

startCounter(entry.target);

counterObserver.unobserve(entry.target);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});


/*=========================================
        LIVE DATE & TIME
=========================================*/

function updateClock(){

const now=new Date();

const date=document.getElementById("live-date");

const time=document.getElementById("live-time");

if(date){

date.innerHTML=now.toLocaleDateString("en-IN",{

weekday:"long",

day:"numeric",

month:"long",

year:"numeric"

});

}

if(time){

time.innerHTML=now.toLocaleTimeString();

}

}

setInterval(updateClock,1000);

updateClock();


/*=========================================
        FESTIVAL COUNTDOWN
=========================================*/

const countdown=document.getElementById("countdown");

if(countdown){

const festivalDate=new Date("March 1, 2027 00:00:00").getTime();

setInterval(()=>{

const now=new Date().getTime();

const distance=festivalDate-now;

if(distance>0){

const days=Math.floor(distance/(1000*60*60*24));

const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes=Math.floor((distance%(1000*60*60))/(1000*60));

countdown.innerHTML=

days+" Days "+hours+" Hrs "+minutes+" Min";

}
else{

countdown.innerHTML="Festival Started 🙏";

}

},1000);

}


/*=========================================
        WELCOME MESSAGE
=========================================*/

setTimeout(()=>{

console.log("🙏 Welcome to Maa Jawalpa Devi Mandir Samiti");

},1000);

/*=========================================
        GALLERY LIGHTBOX
=========================================*/

const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach((img) => {

    img.addEventListener("click", () => {

        const lightbox = document.createElement("div");
        lightbox.className = "lightbox";

        lightbox.innerHTML = `
            <span class="close-lightbox">&times;</span>
            <img src="${img.src}" alt="">
        `;

        document.body.appendChild(lightbox);

        lightbox.addEventListener("click", () => {
            lightbox.remove();
        });

    });

});


/*=========================================
        IMAGE HOVER EFFECT
=========================================*/

galleryImages.forEach((img)=>{

    img.addEventListener("mouseenter",()=>{

        img.style.transform="scale(1.05)";
        img.style.transition=".4s";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.transform="scale(1)";

    });

});


/*=========================================
        CONTACT FORM VALIDATION
=========================================*/

const contactForm = document.querySelector("form");

if(contactForm){

contactForm.addEventListener("submit",function(e){

const inputs=this.querySelectorAll("input[required], textarea[required]");

let valid=true;

inputs.forEach(input=>{

if(input.value.trim()==""){

valid=false;
input.style.border="2px solid red";

}else{

input.style.border="2px solid #ff9800";

}

});

if(!valid){

e.preventDefault();

alert("Please fill all required fields.");

}

});

}


/*=========================================
        BUTTON RIPPLE EFFECT
=========================================*/

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("click",function(e){

const ripple=document.createElement("span");

const x=e.clientX-this.offsetLeft;

const y=e.clientY-this.offsetTop;

ripple.style.left=x+"px";
ripple.style.top=y+"px";

ripple.className="ripple";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});


/*=========================================
        SCROLL FADE EFFECT
=========================================*/

const fadeElements=document.querySelectorAll(

".service-card,.event-card,.counter-box,.gallery-grid img,.about-text,.about-img"

);

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.2
});

fadeElements.forEach(item=>{

observer.observe(item);

});


/*=========================================
        RANDOM QUOTES
=========================================*/

const quotes=[

"🙏 Faith is the strength of the soul.",

"🛕 Jai Maa Jawalpa Devi.",

"🌸 Service to humanity is service to God.",

"🪔 Devotion brings peace.",

"🌼 Blessings begin with faith."

];

const quote=document.getElementById("quote");

if(quote){

setInterval(()=>{

const random=Math.floor(Math.random()*quotes.length);

quote.innerHTML=quotes[random];

},5000);

}

/*=========================================
        HERO BACKGROUND SLIDER
=========================================*/

const hero = document.querySelector(".hero");

if(hero){

const heroImages=[

"images/banner.jpg",
"images/banner2.jpg",
"images/banner3.jpg"

];

let current=0;

setInterval(()=>{

current++;

if(current>=heroImages.length){

current=0;

}

hero.style.backgroundImage=

`linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)),url(${heroImages[current]})`;

},7000);

}


/*=========================================
        AUTO TESTIMONIAL SLIDER
=========================================*/

const testimonial=document.querySelector(".testimonial-slider");

if(testimonial){

let scroll=0;

setInterval(()=>{

scroll+=320;

if(scroll>=testimonial.scrollWidth-testimonial.clientWidth){

scroll=0;

}

testimonial.scrollTo({

left:scroll,

behavior:"smooth"

});

},4000);

}


/*=========================================
        FLOATING WHATSAPP
=========================================*/

const whatsapp=document.querySelector(".whatsapp");

if(whatsapp){

setInterval(()=>{

whatsapp.animate(

[

{transform:"scale(1)"},

{transform:"scale(1.15)"},

{transform:"scale(1)"}

],

{

duration:1000

}

);

},2500);

}


/*=========================================
        CURSOR GLOW
=========================================*/

const glow=document.createElement("div");

glow.className="cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});


/*=========================================
        SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


/*=========================================
        BACK TO TOP
=========================================*/

const topBtn=document.getElementById("topBtn");

if(topBtn){

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}


/*=========================================
        PAGE LOADER ANIMATION
=========================================*/

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});


/*=========================================
        CONSOLE MESSAGE
=========================================*/

console.log("%c🙏 Maa Jawalpa Devi Mandir Samiti",

"color:#ff9800;font-size:22px;font-weight:bold;");

console.log("%cWebsite Developed Successfully ✔",

"color:green;font-size:16px;");