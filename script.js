// Rolagem suave até a seção "Sobre"
document.getElementById("btnSaibaMais").addEventListener("click", () => {
  document.getElementById("sobre").scrollIntoView({ behavior: "smooth" });
});

// Botão de contato com alerta simulando ação
document.getElementById("btnContato").addEventListener("click", () => {
  alert("Entraremos em contato em breve! 💬 Obrigado por visitar a KMD.TEC 🚀");
});

// Efeito de destaque ao passar o mouse nos cards
const cards = document.querySelectorAll(".card");
cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
  });
});
