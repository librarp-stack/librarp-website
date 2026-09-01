/* ==========================================================
   FAQ ACCORDION
========================================================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(other => {

            if (other !== item) {

                other.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});


/* ==========================================================
   LIVE SEARCH
========================================================== */

const searchInput = document.getElementById("faqSearch");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    faqItems.forEach(item => {

        const text = item.textContent.toLowerCase();

        if (text.includes(value)) {

            item.style.display = "block";

        } else {

            item.style.display = "none";

        }

    });

});


/* ==========================================================
   CATEGORY FILTER
========================================================== */

const filterButtons = document.querySelectorAll(".filter-buttons button");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const category = button.dataset.category;

        faqItems.forEach(item => {

            if (

                category === "all" ||

                item.dataset.category === category

            ) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});