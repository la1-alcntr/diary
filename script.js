function showPortfolio() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("main").style.display = "block";
}

/* =========================
   NAV ACTIVE INDICATOR
========================= */
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    document.querySelectorAll(".section").forEach(section => {
        const sectionTop = section.offsetTop;

        if (pageYOffset >= sectionTop - 120) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

/* =========================
   ABOUT MODAL
========================= */
const cards = document.querySelectorAll(".item-box");

const modal = document.getElementById("aboutModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalIcon = document.getElementById("modalIcon");
const closeModal = document.getElementById("closeModal");

cards.forEach(card => {
    card.addEventListener("click", () => {

        modal.style.display = "flex";

        modalTitle.innerText = card.dataset.title;
        modalDesc.innerText = card.dataset.desc;
        modalIcon.src = card.dataset.icon;

    });
});

closeModal.onclick = () => modal.style.display = "none";

window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};

/* =========================
   GMAIL SEND (EMAILJS FIXED)
========================= */

emailjs.init("ok9KYCgnLe5lIbqcj");

const form = document.getElementById("contact-form");

const notif = document.getElementById("notif");
const notifTitle = notif.querySelector("h3");
const notifText = notif.querySelector("p");
const notifIcon = notif.querySelector(".notif-icon");
const closeNotif = document.getElementById("closeNotif");

function showNotif(type, title, message) {
    notif.style.display = "flex";

    notifTitle.innerText = title;
    notifText.innerText = message;

    if (type === "success") {
        notifIcon.innerText = "✉️";
        notifIcon.style.color = "#4CAF50";
    } else {
        notifIcon.innerText = "⚠️";
        notifIcon.style.color = "#c0392b";
    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_51eo8re",
        "template_0uowa26",
        this
    ).then(() => {

        // SUCCESS
        showNotif(
            "success",
            "Message Sent!",
            "Your message has been delivered successfully."
        );

        form.reset();

    }).catch((error) => {

        console.log("EmailJS Error:", error);

        // ERROR (DESIGNED)
        showNotif(
            "error",
            "Failed to Send",
            "Something went wrong."
        );

    });
});

// close notif
closeNotif.onclick = () => {
    notif.style.display = "none";
};

window.addEventListener("click", (e) => {
    if (e.target === notif) {
        notif.style.display = "none";
    }
});

/* =========================
   📸 GALLERY ALBUM DATA
========================= */

const albums = document.querySelectorAll(".album");

const galleryModal = document.getElementById("galleryModal");
const galleryTitle = document.getElementById("galleryTitle");
const galleryImages = document.getElementById("galleryImages");
const closeGallery = document.getElementById("closeGallery");

const albumData = {
    selfies: [
        "images/selfie1.jpg",
        "images/selfie2.jpg",
        "images/selfie3.jpg",
        "images/selfie4.jpg",
        "images/selfie5.jpg"
    ],
    sea: [
        "images/sea1.jpg",
        "images/sea2.jpg",
        "images/sea3.jpg",
        "images/sea4.jpg",
        "images/sea5.jpg"
    ],
    family: [
        "images/family1.jpg",
        "images/family2.jpg",
        "images/family3.jpg",
        "images/family4.jpg",
        "images/family5.jpg"
    ],
    food: [
        "images/food1.jpg",
        "images/food2.jpg",
        "images/food3.jpg",
        "images/food4.jpg",
        "images/food5.jpg"
    ],
    travel: [
        "images/travel1.jpg",
        "images/travel2.jpg",
        "images/travel3.jpg",
        "images/travel4.jpg",
        "images/travel5.jpg"
    ]
};

/* =========================
   GALLERY IMAGE MODAL
========================= */

const images = document.querySelectorAll(".album-box img");

const imgModal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const closeImg = document.getElementById("closeImg");

// open image
images.forEach(img => {
    img.addEventListener("click", () => {
        imgModal.style.display = "flex";
        modalImg.src = img.src;
    });
});

// close button
closeImg.onclick = () => {
    imgModal.style.display = "none";
};

// click outside image closes
window.addEventListener("click", (e) => {
    if (e.target === imgModal) {
        imgModal.style.display = "none";
    }
});