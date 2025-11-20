document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("tablet-video");
  if (video) {
    video.muted = true;
    video.play().catch(() => {
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const carrossel = document.querySelector(".fifith-section .fs-carrossel");
  if (!carrossel) return;

  const slides = Array.from(carrossel.children);
  const viewer = document.querySelector(".fifith-section .fs-viewer");
  const antBtn = document.querySelector(".fifith-section .fs-btn.ant");
  const proxBtn = document.querySelector(".fifith-section .fs-btn.prox");

  let index = 0;
  let slideWidth = 0;

  function computeWidth() {
    slideWidth = viewer.clientWidth; // cada "slide" ocupa 100% do viewer
  }

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    const x = -index * slideWidth;
    carrossel.style.transform = `translateX(${x}px)`;
  }

  function prox() {
    goTo(index + 1);
  }

  function ant() {
    goTo(index - 1);
  }

  // inicialização
  computeWidth();
  goTo(0);

  // recalcula no resize
  let rAF;
  window.addEventListener("resize", () => {
    cancelAnimationFrame(rAF);
    rAF = requestAnimationFrame(() => {
      const cur = index;
      computeWidth();
      goTo(cur);
    });
  });

  // autoplay
  let timer = setInterval(prox, 8000);
  viewer.addEventListener("mouseenter", () => clearInterval(timer));
  viewer.addEventListener("mouseleave", () => {
    timer = setInterval(prox, 8000);
  });

  // botões
  antBtn?.addEventListener("click", ant);
  proxBtn?.addEventListener("click", prox);
});
