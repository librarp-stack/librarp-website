/* ==========================================================
   LIBRA RP

   APP.JS

========================================================== */

"use strict";

/* ==========================================================
   DOM READY
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    navbarScroll();

    heroSlider();

    heroWords();

    scrollReveal();

    smoothScroll();

    counterAnimation();

    scrollTop();

    currentYear();

});
/* ==========================================================
   NAVBAR
========================================================== */

function navbarScroll(){

    const navbar=document.querySelector(".navbar");

    if(!navbar) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>80){

            navbar.classList.add("scrolled");

        }

        else{

            navbar.classList.remove("scrolled");

        }

    });

}
/* ==========================================================
   HERO SLIDER
========================================================== */

function heroSlider(){

    const slides=document.querySelectorAll(".hero-slide");

    if(slides.length===0) return;

    let current=0;

    setInterval(()=>{

        slides[current].classList.remove("active");

        current++;

        if(current>=slides.length){

            current=0;

        }

        slides[current].classList.add("active");

    },8000);

}
/* ==========================================================
   HERO WORD
========================================================== */

function heroWords(){

    const word=document.getElementById("hero-word");

    if(!word) return;

    const words=[

        "YOUR STORY",

        "PROTECT",

        "RULE",

        "BUILD",

        "LIVE"

    ];

    let index=0;

    setInterval(()=>{

        index++;

        if(index>=words.length){

            index=0;

        }

        word.style.opacity=0;

        setTimeout(()=>{

            word.innerHTML=words[index];

            word.style.opacity=1;

        },250);

    },4000);

}
/* ==========================================================
   SCROLL REVEAL
========================================================== */

function scrollReveal(){

    const elements=document.querySelectorAll(".fade-up");

    if(elements.length===0) return;

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    elements.forEach(element=>{

        observer.observe(element);

    });

}
/* ==========================================================
   SMOOTH SCROLL
========================================================== */

function smoothScroll(){

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            const target=document.querySelector(this.getAttribute("href"));

            if(!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        });

    });

}
/* ==========================================================
   SCROLL TO TOP
========================================================== */

function scrollTop(){

    const button=document.getElementById("scrollTop");

    if(!button) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>700){

            button.classList.add("show");

        }else{

            button.classList.remove("show");

        }

    });

    button.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}
/* ==========================================================
   COUNTER ANIMATION
========================================================== */

function counterAnimation(){

    const counters=document.querySelectorAll("[data-counter]");

    if(counters.length===0) return;

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            const counter=entry.target;

            const target=parseInt(counter.dataset.counter);

            let current=0;

            const increment=Math.max(1,Math.ceil(target/60));

            const timer=setInterval(()=>{

                current+=increment;

                if(current>=target){

                    current=target;

                    clearInterval(timer);
                }

                counter.textContent=current+"+";

            },20);

            observer.unobserve(counter);

        });

    },{

        threshold:.5

    });

    counters.forEach(counter=>{

        observer.observe(counter);

    });

}
/* ==========================================================
   PARALLAX HERO
========================================================== */

window.addEventListener("scroll",()=>{

    const hero=document.querySelector(".hero");

    if(!hero) return;

    hero.style.backgroundPositionY=

        window.scrollY*.45+"px";

});
/* ==========================================================
   PAGE LOADER
========================================================== */

window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    if(!loader) return;

    setTimeout(()=>{

        loader.classList.add("hide");

    },700);

});
/* ==========================================================
   CURSOR GLOW
========================================================== */

const glow=document.getElementById("cursorGlow");

window.addEventListener("mousemove",(e)=>{

if(!glow) return;

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});
/* ==========================================================
   CURRENT YEAR
========================================================== */

function currentYear(){

    const year=document.getElementById("currentYear");

    if(!year) return;

    year.textContent=new Date().getFullYear();

}