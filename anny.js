// Menu Responsivo
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Formulário de contato (simulação)
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  alert(`Obrigado pelo contato, ${nome}! Em breve retornaremos.`);
  e.target.reset();
});
