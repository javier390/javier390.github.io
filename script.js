// ================= MENU HAMBURGUESA =================
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
console.log(1);


menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    console.log("click");
    
});


// ================= NAVBAR EFECTO SCROLL =================
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
});


// ================= SCROLL SUAVE =================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: "smooth" });

        navLinks.classList.remove("active");
    });
});


// ================= ANIMACIONES =================
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".timeline-item, .project-card, .hero-text, .hero-imagen")
.forEach(el => observer.observe(el));


// ================= MODO OSCURO =================
const darkBtn = document.getElementById("darkModeToggle");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // guardar preferencia
    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// cargar tema guardado
if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
}


// ================= TYPEWRITER PRO =================
const text = "Desarrollador Web ";
let i = 0;

function escribir() {
    const titulo = document.querySelector(".hero-text h2");

    if (i < text.length) {
        titulo.innerHTML += text.charAt(i);
        i++;
        setTimeout(escribir, 80);
    }
}

document.querySelector(".hero-text h2").innerHTML = "";
escribir();


// ================= CURSOR PRO =================
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
});


const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

// Ajustar tamaño
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letras = "35489854878965146898*+.5498654654!=%&ᛞᛟᛝᛚᛄþᚠ";
const fontSize = 16;
const columnas = canvas.width / fontSize;

const drops = [];

// Inicializar columnas
for (let i = 0; i < columnas; i++) {
    drops[i] = 1;
}

function draw() {
    // Fondo con transparencia (rastro)
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff00";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = letras.charAt(Math.floor(Math.random() * letras.length));

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reiniciar cuando llega abajo
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

// Animación
setInterval(draw, 33);

// Responsive
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});