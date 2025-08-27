

document.addEventListener("DOMContentLoaded", () => {
  // Elementos principales para los menús
  const btnHamburguesa = document.getElementById("btn-hamburguesa");
  const menuDesplegable = document.getElementById("menu-desplegable");
  const btnIdioma = document.getElementById("btn-idioma");
  const menuIdiomas = document.getElementById("menu-idiomas");
  const overlay = document.getElementById("overlay");
  const body = document.body;

  // Debug: verificar que todos los elementos existen
  console.log("Elementos encontrados:", {
    btnHamburguesa: !!btnHamburguesa,
    menuDesplegable: !!menuDesplegable,
    btnIdioma: !!btnIdioma,
    menuIdiomas: !!menuIdiomas,
    overlay: !!overlay
  });

  // Seleccionar TODOS los botones de salir (en ambos menús)
  const botonesSalir = document.querySelectorAll(".btn-salir");

  // Función para abrir un menú específico
  function abrirMenu(menu) {
    if (!menu) {
      console.error("Menu no encontrado");
      return;
    }
    
    cerrarMenus(); // Cierra todo lo demás antes
    menu.classList.add("visible");
    if (overlay) overlay.classList.add("visible");
    body.classList.add("overlay-activo");
    
    // Prevenir scroll del body
    body.style.overflow = "hidden";
    
    console.log("Menu abierto:", menu.id || menu.className);
}
  // Función para cerrar todos los menús
  function cerrarMenus() {
    if (menuDesplegable) {
      menuDesplegable.classList.remove("visible");
    }
    if (menuIdiomas) {
      menuIdiomas.classList.remove("visible");
    }
    if (overlay) {
      overlay.classList.remove("visible");
    }
    body.classList.remove("overlay-activo");
    
    // Restaurar scroll del body
    body.style.overflow = "auto";
    
    console.log("Todos los menus cerrados");
  }

  // Event listeners para abrir menús
  if (btnHamburguesa) {
    btnHamburguesa.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("Click en hamburguesa");
      abrirMenu(menuDesplegable);
    });
  }

  if (btnIdioma) {
    btnIdioma.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("Click en botón idioma");
      abrirMenu(menuIdiomas);
    });
  }

  // Event listeners para cerrar menús
  if (overlay) {
    overlay.addEventListener("click", () => {
      console.log("Click en overlay");
      cerrarMenus();
    });
  }

  // Event listeners para todos los botones de salir
  botonesSalir.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("Click en botón salir");
      cerrarMenus();
    });
  });

  // Cerrar menús con la tecla Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      cerrarMenus();
    }
  });

  // Evitar que los clicks dentro de los menús los cierren
  if (menuDesplegable) {
    menuDesplegable.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }

  if (menuIdiomas) {
    menuIdiomas.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }

  // Tabs de la sección community
  const tabButtons = document.querySelectorAll(".tab-button");
  
  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Remover clase active de todos los botones
      tabButtons.forEach(btn => btn.classList.remove("active"));
      // Agregar clase active al botón clickeado
      button.classList.add("active");
      
      console.log("Tab seleccionado:", button.textContent);
    });
  });

  

  // Back to top button functionality
  const backToTopBtn = document.getElementById("backToTop");
  
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









  // Smooth scrolling para los enlaces del menú
  const menuLinks = document.querySelectorAll('a[href^="#"]');
  
  menuLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        // Cerrar menús si están abiertos
        cerrarMenus();
        
        // Scroll suave hacia la sección
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Animaciones on scroll (opcional)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observar elementos para animaciones
  const animatedElements = document.querySelectorAll(".about-text, .community-card, .newsletter-text");
  
  animatedElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

  console.log("JavaScript completamente cargado y funcional");
});