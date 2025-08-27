document.addEventListener("DOMContentLoaded", () => {
  const step1 = document.getElementById("step1"); // Bienvenido
  const step2 = document.getElementById("step2"); // a
  const step3 = document.getElementById("step3"); // Logo

  const hideAll = () => {
    step1.style.opacity = 0;
    step2.style.opacity = 0;
    step3.style.opacity = 0;
  };

  // 1️⃣ Mostrar "Bienvenido"
  hideAll();
  setTimeout(() => { step1.style.opacity = 1; }, 500);

  // 1.5️⃣ Ocultar "Bienvenido"
  setTimeout(() => { step1.style.opacity = 0; }, 2000);

  // 2️⃣ Mostrar "a"
  setTimeout(() => { step2.style.opacity = 1; }, 2500);

  // 2.5️⃣ Ocultar "a"
  setTimeout(() => { step2.style.opacity = 0; }, 4000);

  // 3️⃣ Mostrar logo (y mantenerlo)
  setTimeout(() => { step3.style.opacity = 1; }, 4500);
});
