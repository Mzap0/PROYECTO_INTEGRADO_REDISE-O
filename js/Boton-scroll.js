const backToTopBtn = document.getElementById("back-to-top");

if (backToTopBtn) {
  // Mostrar/ocultar el botón según el scroll
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.style.display = "flex";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  // Scroll suave hacia arriba
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
