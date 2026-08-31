/* ==========================================================
   COMPONENT LOADER
========================================================== */

const isRoot =
window.location.pathname === "/" ||
window.location.pathname.endsWith("/index.html") &&
!window.location.pathname.includes("/experience/") &&
!window.location.pathname.includes("/careers/") &&
!window.location.pathname.includes("/criminal/") &&
!window.location.pathname.includes("/community/") &&
!window.location.pathname.includes("/support/");

const BASE = isRoot ? "" : "../";

/* ==========================================================
   LOAD COMPONENT
========================================================== */

async function loadComponent(id,file){

    const response = await fetch(BASE + file);

    document.getElementById(id).innerHTML =
    await response.text();

}

/* ==========================================================
   INIT
========================================================== */

async function initComponents(){

    await loadComponent(

        "navbar",

        "assets/components/navbar.html"

    );

    await loadComponent(

        "footer",

        "assets/components/footer.html"

    );

    fixPaths();

}

/* ==========================================================
   FIX PATHS
========================================================== */

function fixPaths(){

    document.querySelectorAll("[data-src]").forEach(img=>{

        if(img.dataset.src==="logo"){

            img.src =
            BASE + "assets/images/logos/logo.png";

        }

    });

    const links={

        home:"index.html",

        play:"play/index.html",

        experience:"experience/index.html",

        careers:"careers/index.html",

        criminal:"criminal/index.html",

        community:"community/index.html",

        support:"support/index.html"

    };

    document.querySelectorAll("[data-link]").forEach(link=>{

        link.href = BASE + links[link.dataset.link];

    });

}

initComponents();