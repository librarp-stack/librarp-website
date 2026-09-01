const slides = [

{
image:"../assets/images/cartels/drug-production.webp",
title:"Drug Production",
text:"Manufacture illegal narcotics and expand your organization."
},

{
image:"../assets/images/cartels/store-robbery.webp",
title:"Store Robberies",
text:"Coordinate fast robberies for maximum illegal profit."
},

{
image:"../assets/images/cartels/luxury-cars.webp",
title:"Luxury Fleet",
text:"Success brings prestige, exotic vehicles and influence."
},

{
image:"../assets/images/cartels/cartel-group.webp",
title:"Cartel Operations",
text:"Plan together. Execute together. Dominate together."
}

];

let current=0;

const img=document.getElementById("operationImage");
const title=document.getElementById("operationTitle");
const text=document.getElementById("operationText");
const tabs=document.querySelectorAll(".operation-tabs button");

function showSlide(index){

current=index;

img.src=slides[current].image;
title.textContent=slides[current].title;
text.textContent=slides[current].text;

tabs.forEach(tab=>tab.classList.remove("active"));
tabs[current].classList.add("active");

}

document.getElementById("cartelNext").onclick=()=>{

showSlide((current+1)%slides.length);

};

document.getElementById("cartelPrev").onclick=()=>{

showSlide((current-1+slides.length)%slides.length);

};

tabs.forEach(tab=>{

tab.onclick=()=>{

showSlide(Number(tab.dataset.slide));

};

});

showSlide(0);

setInterval(()=>{

showSlide((current+1)%slides.length);

},7000);