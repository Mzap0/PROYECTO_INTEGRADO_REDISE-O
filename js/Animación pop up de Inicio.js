// Esperamos a que cargue todo el DOM
document.addEventListener("DOMContentLoaded", function () {
  const modalPrincipal = document.getElementById('modalPrincipal');
  
  // Verificamos si Bootstrap está disponible
  if (typeof bootstrap === 'undefined') {
    console.error("Bootstrap no está cargado correctamente");
    return;
  }

  // --- 🔹 Contenido dinámico ---
  modalPrincipal.addEventListener("show.bs.modal", function (event) {
    console.log("➡️ Modal se está abriendo...");
    
    const button = event.relatedTarget; // el botón que disparó el modal
    if (!button) return;

    const title = button.getAttribute("data-title") || "Título por defecto";
    const text = button.getAttribute("data-text") || "Descripción por defecto";
    const img = button.getAttribute("data-img") || "Media/Img-decoración/placeholder.png";

    const modalTitle = modalPrincipal.querySelector("#modalPrincipalLabel");
    const modalText = modalPrincipal.querySelector(".modal-text"); 
    const modalImg = modalPrincipal.querySelector(".modal-img");  

    if (modalTitle) modalTitle.textContent = title;
    if (modalText) modalText.textContent = text;
    if (modalImg) modalImg.setAttribute("src", img);
  });

  modalPrincipal.addEventListener('shown.bs.modal', function () {
    console.log("✅ Modal abierto completamente.");
    
    // Focus para accesibilidad
    const firstFocusable = modalPrincipal.querySelector(
      "button, a, input, textarea, [tabindex]:not([tabindex='-1'])"
    );
    if (firstFocusable) firstFocusable.focus();
  });

  modalPrincipal.addEventListener('hidden.bs.modal', function () {
    console.log("⏹️ Modal cerrado completamente.");
  });
});