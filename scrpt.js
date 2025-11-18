// Abrir portal
const heart = document.getElementById("enterPortal");
const welcome = document.getElementById("welcomeScreen");
const main = document.getElementById("mainContent");

// Se clicar no coração ou no texto
document.querySelector(".clique-text").onclick = openPortal;
heart.onclick = openPortal;

function openPortal() {
    heart.classList.add("portalEffect");
    welcome.style.transition = "1.5s";

    setTimeout(() => {
        welcome.style.opacity = "0";
    }, 800);

    setTimeout(() => {
        welcome.style.display = "none";
        main.classList.remove("hidden");
    }, 1500);
}

// Fotos aparecem com zoom quando rolar
const fotos = document.querySelectorAll(".foto");

function mostrarFotos() {
    fotos.forEach(f => {
        const rect = f.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            f.classList.add("show");
        }
    });
}

window.addEventListener("scroll", mostrarFotos);
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visivel");
        }
    });
});

document.querySelectorAll(".item-timeline").forEach((el) => observador.observe(el));
