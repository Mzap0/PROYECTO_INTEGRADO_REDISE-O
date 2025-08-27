document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('newsletterForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const aceptarCookies = document.getElementById('pref3').checked;

    const pref1 = document.getElementById('pref1').checked;
    const pref2 = document.getElementById('pref2').checked;

    if (nombre === '' || correo === '') {
      alert('Por favor completa todos los campos.');
      return;
    }

    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoValido.test(correo)) {
      alert('Por favor ingresa un correo electrónico válido.');
      return;
    }

    if (!pref1 && !pref2) {
      alert('Debes seleccionar al menos una preferencia.');
      return;
    }

    if (!aceptarCookies) {
      alert('Debes aceptar el uso de cookies y el envío de información comercial.');
      return;
    }

    alert('¡Formulario enviado correctamente!');
    form.reset();
  });
});


