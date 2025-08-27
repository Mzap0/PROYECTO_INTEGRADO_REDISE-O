document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector("#comunidad-activa");
  if (!section) return;

  const filterButtons  = section.querySelectorAll(".btn-filter");
  const filterDropdown = section.querySelector(".btn-filter-dropdown");
  const items          = section.querySelectorAll(".card-item");

  const hide = el => el.classList.add("d-none");
  const show = el => el.classList.remove("d-none");

  function applyFilter(category) {
    // Ocultar todo
    items.forEach(hide);

    if (category === "all") {
      // Main general
      section
        .querySelectorAll('.card-item[data-role="main"][data-category="all"]')
        .forEach(show);

      // Todas secundarias
      section
        .querySelectorAll('.card-item[data-role="secondary"]')
        .forEach(show);

    } else {
      // Main de esa categoría
      section
        .querySelectorAll(`.card-item[data-role="main"][data-category="${category}"]`)
        .forEach(show);

      // Máx 2 secundarias de esa categoría
      const secs = Array.from(
        section.querySelectorAll(`.card-item[data-role="secondary"][data-category="${category}"]`)
      );
      secs.slice(0, 2).forEach(show);
    }

    // 🔹 Estado visual botones + sincronizar dropdown
    filterButtons.forEach(btn =>
      btn.classList.toggle("active", btn.dataset.filter === category)
    );
    if (filterDropdown) filterDropdown.value = category;
  }

  // Eventos botones
  filterButtons.forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      applyFilter(btn.dataset.filter);
    });
  });

  // Evento dropdown
  if (filterDropdown) {
    filterDropdown.addEventListener("change", e => applyFilter(e.target.value));
  }

  // Inicial
  applyFilter("all");

  // Reaplicar al redimensionar
  window.addEventListener("resize", () => {
    const activeBtn = section.querySelector(".btn-filter.active");
    const current =
      activeBtn?.dataset.filter || (filterDropdown ? filterDropdown.value : "all");
    applyFilter(current);
  });
});


// ----------------el filtraje de la tienda----------------------------------//

document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".btn-filter");
  const filterDropdown = document.querySelector(".btn-filter-dropdown");
  const productCards = document.querySelectorAll(".tarjeta-secundaria");

  function aplicarFiltro(filtro) {
    productCards.forEach((card) => {
      const categoria = card.getAttribute("data-category");

      if (filtro === "all" || filtro === categoria) {
        card.classList.remove("d-none");
      } else {
        card.classList.add("d-none");
      }
    });
  }

  // --- Lógica para los botones ---
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filtro = button.getAttribute("data-filter");
      aplicarFiltro(filtro);
    });
  });

  // --- Lógica para el dropdown en mobile ---
  if (filterDropdown) {
    filterDropdown.addEventListener("change", (e) => {
      const filtro = e.target.value;
      aplicarFiltro(filtro);
    });
  }
});



  