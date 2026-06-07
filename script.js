const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href").includes(current)){
            link.classList.add("active");
        }

    });

});
document.addEventListener("DOMContentLoaded", function () {

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const closeLightbox = document.getElementById("closeLightbox");

    if (!lightbox || !lightboxImg || !closeLightbox) {
        console.error("Lightbox elements missing in HTML!");
        return;
    }

    const images = document.querySelectorAll(".card img, .certificate img");

    images.forEach(img => {
        img.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
        });
    });

    closeLightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target !== lightboxImg) {
            lightbox.style.display = "none";
        }
    });

});

document.addEventListener("DOMContentLoaded", function () {

    const hamburger = document.getElementById("hamburger");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.getElementById("closeBtn");

    hamburger.addEventListener("click", () => {
        sidebar.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        sidebar.classList.remove("active");
    });

    document.querySelectorAll(".sidebar a").forEach(link => {
        link.addEventListener("click", () => {
            sidebar.classList.remove("active");
        });
    });

});
const text = "Bachelor of Science in Information Systems Student";

const typingElement = document.getElementById("typing");

let index = 0;
let deleting = false;

function typeEffect(){

    if(!deleting){

        typingElement.textContent =
        text.substring(0, index++);

        if(index > text.length){

            deleting = true;

            setTimeout(typeEffect, 2000);

            return;
        }

    }else{

        typingElement.textContent =
        text.substring(0, index--);

        if(index < 0){

            deleting = false;
        }
    }

    setTimeout(typeEffect, deleting ? 40 : 90);
}

typeEffect();
