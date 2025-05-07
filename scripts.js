// Carrossel funcional
let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');
const dotsContainer = document.querySelector('.dots');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        dotsContainer.children[i].classList.toggle('active', i === index);
    });
    currentSlide = index;
}

function nextSlide() {
    let newIndex = (currentSlide + 1) % slides.length;
    showSlide(newIndex);
}

function prevSlide() {
    let newIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(newIndex);
}

// Gerar bullets
slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.addEventListener('click', () => showSlide(i));
    dotsContainer.appendChild(dot);
});

document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('prev').addEventListener('click', prevSlide);

showSlide(currentSlide);

// Filtro da programação
const filtros = document.querySelectorAll('.filter');
const eventos = document.querySelectorAll('.evento');

filtros.forEach(botao => {
    botao.addEventListener('click', () => {
        const filtro = botao.getAttribute('data-filter');
        eventos.forEach(evento => {
            if (filtro === 'todos' || evento.classList.contains(filtro)) {
                evento.style.display = 'block';
            } else {
                evento.style.display = 'none';
            }
        });
    });
});

document.getElementById('newsletter').addEventListener('submit', function (e) {
    const emailInput = document.getElementById('email');
    const errorSpan = document.getElementById('email-error');

    if (!emailInput.value) {
        e.preventDefault(); // impede o envio do formulário
        errorSpan.textContent = 'Preencha com seu e-mail';
        emailInput.focus();
    } else if (!emailInput.validity.valid) {
        e.preventDefault();
        errorSpan.textContent = 'Informe um e-mail válido';
        emailInput.focus();
    } else {
        errorSpan.textContent = ''; // limpa mensagens anteriores
    }
});

document.querySelector('.menu-toggle').onclick = function () {
    document.querySelector('nav ul').classList.toggle('active');
}
