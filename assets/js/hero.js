const heroSlides = [
    {
        role: "POLICE OFFICER",
        bg: "assets/images/hero/hero-1.webp",
        fg: "assets/images/police/sapf.webp"
    },
    {
        role: "CRIME LORD",
        bg: "assets/images/hero/hero-2.webp",
        fg: "assets/images/gangs/gang.webp"
    },
    {
        role: "CAR ENTHUSIAST",
        bg: "assets/images/hero/hero-3.webp",
        fg: "assets/images/vehicles/vehicles.webp"
    },
    {
        role: "LUXURY HOMEOWNER",
        bg: "assets/images/hero/hero-4.webp",
        fg: "assets/images/housing/mansion.webp"
    },
    {
        role: "CASINO HIGH ROLLER",
        bg: "assets/images/hero/hero-5.webp",
        fg: "assets/images/casino/casino.webp"
    },
    {
        role: "COMMUNITY LEADER",
        bg: "assets/images/hero/hero-6.webp",
        fg: "assets/images/community/dj.webp"
    }
];

window.addEventListener("DOMContentLoaded", () => {

    const role = document.getElementById("heroRole");
    const bg = document.getElementById("heroBackground");
    const fg = document.getElementById("heroImage");

    if (!role || !bg || !fg) {
        console.error("Missing hero element", { role, bg, fg });
        return;
    }

    let current = 0;

    function updateHero(index) {
        bg.style.opacity = "0";
        fg.style.opacity = "0";
        role.style.opacity = "0";

        setTimeout(() => {
            bg.src = heroSlides[index].bg;
            fg.src = heroSlides[index].fg;
            role.textContent = heroSlides[index].role;

            bg.style.opacity = "1";
            fg.style.opacity = "1";
            role.style.opacity = "1";
        }, 400);
    }

    setInterval(() => {
        current = (current + 1) % heroSlides.length;
        updateHero(current);
    }, 7000);

});