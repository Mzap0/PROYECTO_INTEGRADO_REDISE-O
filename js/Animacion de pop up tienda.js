// ---------------- Producto 1 ----------------
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carouselProducto1");
  const decoracionesContainer = document.getElementById("decoracionesProducto1");

  if (carousel && decoracionesContainer) {
    function actualizarDecoraciones() {
      const slides = carousel.querySelectorAll(".carousel-item");
      const activeSlide = carousel.querySelector(".carousel-item.active");

      decoracionesContainer.innerHTML = "";

      slides.forEach(slide => {
        if (slide !== activeSlide) {
          const src = slide.getAttribute("data-img");
          if (src) {
            const img = document.createElement("img");
            img.src = src;
            img.className = "img-fluid rounded-3";
            img.style.maxWidth = "120px";
            img.alt = "Decoración";
            decoracionesContainer.appendChild(img);
          }
        }
      });
    }

    actualizarDecoraciones();
    carousel.addEventListener("slid.bs.carousel", actualizarDecoraciones);
  }
});

// ---------------- Producto 2 ----------------
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carouselProducto2");
  const decoracionesContainer = document.getElementById("decoracionesProducto2");

  if (carousel && decoracionesContainer) {
    function actualizarDecoraciones() {
      const slides = carousel.querySelectorAll(".carousel-item");
      const activeSlide = carousel.querySelector(".carousel-item.active");

      decoracionesContainer.innerHTML = "";

      slides.forEach(slide => {
        if (slide !== activeSlide) {
          const src = slide.getAttribute("data-img");
          if (src) {
            const img = document.createElement("img");
            img.src = src;
            img.className = "img-fluid rounded-3";
            img.style.maxWidth = "120px";
            img.alt = "Decoración";
            decoracionesContainer.appendChild(img);
          }
        }
      });
    }

    actualizarDecoraciones();
    carousel.addEventListener("slid.bs.carousel", actualizarDecoraciones);
  }
});

// ---------------- Producto 3 ----------------
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carouselProducto3");
  const decoracionesContainer = document.getElementById("decoracionesProducto3");

  if (carousel && decoracionesContainer) {
    function actualizarDecoraciones() {
      const slides = carousel.querySelectorAll(".carousel-item");
      const activeSlide = carousel.querySelector(".carousel-item.active");

      decoracionesContainer.innerHTML = "";

      slides.forEach(slide => {
        if (slide !== activeSlide) {
          const src = slide.getAttribute("data-img");
          if (src) {
            const img = document.createElement("img");
            img.src = src;
            img.className = "img-fluid rounded-3";
            img.style.maxWidth = "120px";
            img.alt = "Decoración";
            decoracionesContainer.appendChild(img);
          }
        }
      });
    }

    actualizarDecoraciones();
    carousel.addEventListener("slid.bs.carousel", actualizarDecoraciones);
  }
});

// ---------------- Producto 4 ----------------
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carouselProducto4");
  const decoracionesContainer = document.getElementById("decoracionesProducto4");

  if (carousel && decoracionesContainer) {
    function actualizarDecoraciones() {
      const slides = carousel.querySelectorAll(".carousel-item");
      const activeSlide = carousel.querySelector(".carousel-item.active");

      decoracionesContainer.innerHTML = "";

      slides.forEach(slide => {
        if (slide !== activeSlide) {
          const src = slide.getAttribute("data-img");
          if (src) {
            const img = document.createElement("img");
            img.src = src;
            img.className = "img-fluid rounded-3";
            img.style.maxWidth = "120px";
            img.alt = "Decoración";
            decoracionesContainer.appendChild(img);
          }
        }
      });
    }

    actualizarDecoraciones();
    carousel.addEventListener("slid.bs.carousel", actualizarDecoraciones);
  }
});

// ---------------- Producto 5 ----------------
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carouselProducto5");
  const decoracionesContainer = document.getElementById("decoracionesProducto5");

  if (carousel && decoracionesContainer) {
    function actualizarDecoraciones() {
      const slides = carousel.querySelectorAll(".carousel-item");
      const activeSlide = carousel.querySelector(".carousel-item.active");

      decoracionesContainer.innerHTML = "";

      slides.forEach(slide => {
        if (slide !== activeSlide) {
          const src = slide.getAttribute("data-img");
          if (src) {
            const img = document.createElement("img");
            img.src = src;
            img.className = "img-fluid rounded-3";
            img.style.maxWidth = "120px";
            img.alt = "Decoración";
            decoracionesContainer.appendChild(img);
          }
        }
      });
    }

    actualizarDecoraciones();
    carousel.addEventListener("slid.bs.carousel", actualizarDecoraciones);
  }
});

// ---------------- Producto 6 ----------------
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carouselProducto6");
  const decoracionesContainer = document.getElementById("decoracionesProducto6");

  if (carousel && decoracionesContainer) {
    function actualizarDecoraciones() {
      const slides = carousel.querySelectorAll(".carousel-item");
      const activeSlide = carousel.querySelector(".carousel-item.active");

      decoracionesContainer.innerHTML = "";

      slides.forEach(slide => {
        if (slide !== activeSlide) {
          const src = slide.getAttribute("data-img");
          if (src) {
            const img = document.createElement("img");
            img.src = src;
            img.className = "img-fluid rounded-3";
            img.style.maxWidth = "120px";
            img.alt = "Decoración";
            decoracionesContainer.appendChild(img);
          }
        }
      });
    }

    actualizarDecoraciones();
    carousel.addEventListener("slid.bs.carousel", actualizarDecoraciones);
  }
});

// ---------------- Producto 7 ----------------
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carouselProducto7");
  const decoracionesContainer = document.getElementById("decoracionesProducto7");

  if (carousel && decoracionesContainer) {
    function actualizarDecoraciones() {
      const slides = carousel.querySelectorAll(".carousel-item");
      const activeSlide = carousel.querySelector(".carousel-item.active");

      decoracionesContainer.innerHTML = "";

      slides.forEach(slide => {
        if (slide !== activeSlide) {
          const src = slide.getAttribute("data-img");
          if (src) {
            const img = document.createElement("img");
            img.src = src;
            img.className = "img-fluid rounded-3";
            img.style.maxWidth = "120px";
            img.alt = "Decoración";
            decoracionesContainer.appendChild(img);
          }
        }
      });
    }

    actualizarDecoraciones();
    carousel.addEventListener("slid.bs.carousel", actualizarDecoraciones);
  }
});
