// Pequeno efeito ao rolar a página
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.background = "linear-gradient(135deg, #bce3ff, #c8ffd8, #ffd6f8)";
    header.style.transition = "0.10s";
  } else {
    header.style.background = "linear-gradient(135deg, #c3e4ff, #d3ffd3, #ffe0f7)";
  }
});

// Efeito suave ao clicar no menu
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});
