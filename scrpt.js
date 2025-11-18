const observador = new IntersectionObserver((entradas, observer) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visivel");
            observer.unobserve(entrada.target); // para de observar depois que anima
        }
    });
}, { threshold: 0.3 });  // ativa só quando 30% da imagem aparece

document.querySelectorAll(".item-timeline").forEach((el) => 
    observador.observe(el)
);
