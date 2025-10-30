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


function showClasses() {
    const classInfo = document.getElementById("class-info");
    classInfo.classList.toggle("hidden");
}

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("responseMessage").textContent = `Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`;
        document.getElementById("responseMessage").classList.remove("hidden");
        contactForm.reset();
    }
});
function showClasses() {
    const classInfo = document.getElementById("class-info");
    classInfo.classList.toggle("hidden");
}

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("responseMessage").textContent = `Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`;
        document.getElementById("responseMessage").classList.remove("hidden");
        contactForm.reset();
    }
});
function showClasses() {
    const classInfo = document.getElementById("class-info");
    classInfo.classList.toggle("hidden");
}

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("responseMessage").textContent = `Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`;
        document.getElementById("responseMessage").classList.remove("hidden");
        contactForm.reset();
    }
});
function showClasses() {
    const classInfo = document.getElementById("class-info");
    classInfo.classList.toggle("hidden");
}

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("responseMessage").textContent = `Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`;
        document.getElementById("responseMessage").classList.remove("hidden");
        contactForm.reset();
    }
});
 function showClasses() {
    const classInfo = document.getElementById("class-info");
    classInfo.classList.toggle("hidden");
}

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("responseMessage").textContent = `Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`;
        document.getElementById("responseMessage").classList.remove("hidden");
        contactForm.reset();
    }
});
function showClasses() {
    const classInfo = document.getElementById("class-info");
    classInfo.classList.toggle("hidden");
}

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("responseMessage").textContent = `Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`;
        document.getElementById("responseMessage").classList.remove("hidden");
        contactForm.reset();
    }
});
