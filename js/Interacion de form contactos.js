document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre   = document.getElementById('contactNombre').value.trim();
    const apellido = document.getElementById('contactApellido').value.trim();
    const email    = document.getElementById('contactEmail').value.trim();
    const asunto   = document.getElementById('contactAsunto').value.trim();
    const mensaje  = document.getElementById('contactMensaje').value.trim();

    const aceptar1 = document.getElementById('acepto1').checked;
    const aceptar2 = document.getElementById('acepto2').checked;

    // Campos obligatorios
    if (!nombre || !apellido || !email || !asunto || !mensaje) {
      alert('Por favor completa todos los campos.');
      return;
    }

    // Email válido
    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoValido.test(email)) {
      alert('Por favor ingresa un correo electrónico válido.');
      return;
    }

    // Mensaje mínimo
    if (mensaje.length < 10) {
      alert('El mensaje debe tener al menos 10 caracteres.');
      return;
    }

    // Consentimientos (ambos)
    if (!aceptar1 || !aceptar2) {
      alert('Debes aceptar ambas casillas de consentimiento.');
      return;
    }

    // Si todo ok
    alert('¡Mensaje enviado correctamente!');
    form.reset();

    // (Opcional) cerrar el modal al enviar
    const modalEl = document.getElementById('contactModal');
    if (window.bootstrap && modalEl) {
      const modalInstance = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
      modalInstance.hide();
    }
  });
});

