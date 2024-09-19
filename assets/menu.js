function openNav() {
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav() {
    document.getElementById("mobile-menu").style.width = "0%";
}

const home = document.querySelector("#home");
const about = document.querySelector("#about");
const plans = document.querySelector("#plans");
const contact = document.querySelector("#contact");

home.addEventListener("click", (h) => {
    h.preventDefault();
    const selectionN = document.querySelector("#home-section");
    selectionN.scrollIntoView({ behavior: "smooth" });
});
about.addEventListener("click", (a) => {
    a.preventDefault();
    const selectionN = document.querySelector("#about-section");
    selectionN.scrollIntoView({ behavior: "smooth" });
});
plans.addEventListener("click", (p) => {
    p.preventDefault();
    const selectionN = document.querySelector("#plans-section");
    selectionN.scrollIntoView({ behavior: "smooth" });
});
contact.addEventListener("click", (c) => {
    c.preventDefault();
    const selectionN = document.querySelector("#contact-us-section");
    selectionN.scrollIntoView({ behavior: "smooth" });
});

const home2 = document.querySelector("#home2");
const about2 = document.querySelector("#about2");
const plans2 = document.querySelector("#plans2");
const contact2 = document.querySelector("#contact2");

home2.addEventListener("click", (h) => {
    h.preventDefault();
    const selectionN = document.querySelector("#home-section");
    selectionN.scrollIntoView({ behavior: "smooth" });
    closeNav();
});

about2.addEventListener("click", (a) => {    
    a.preventDefault();
    const selectionN = document.querySelector("#about-section");
    selectionN.scrollIntoView({ behavior: "smooth" });
    closeNav();
});

plans2.addEventListener("click", (p) => {
    p.preventDefault();
    const selectionN = document.querySelector("#plans-section");
    selectionN.scrollIntoView({ behavior: "smooth" });
    closeNav();
});

contact2.addEventListener("click", (c) => {
    c.preventDefault();
    const selectionN = document.querySelector("#contact-us-section");
    selectionN.scrollIntoView({ behavior: "smooth" });
    closeNav();
});