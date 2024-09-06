function openNav() {
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav() {
    document.getElementById("mobile-menu").style.width = "0%";
}

const home = document.querySelector("#home");
const about = document.querySelector("#about");

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

const home2 = document.querySelector("#home2");
const about2 = document.querySelector("#about2");

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