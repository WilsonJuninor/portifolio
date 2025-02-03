
/* TUERN THE MENU HAMBURGUER INTO X*/
const menuHamburguer= document.querySelector (' .menu-hamburguer')
menuHamburguer.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('change');

    if(menuHamburguer.classList.contains('change')){
        nav.style.display = 'block';

    } else {
        nav.style.display = 'none';
    }
}


function toggleText(button) {
    var serviceBox = button.closest('.service-box');  // Seleciona o .service-box
    var serviceText = serviceBox.querySelector('.service-text');  // Seleciona o parágrafo que contém o texto

    // Alterna a classe 'show-more' no parágrafo
    serviceText.classList.toggle('show-more');

    // Altera o texto do botão conforme a visibilidade do texto
    if (serviceText.classList.contains('show-more')) {
        button.textContent = "Leia Menos";
    } else {
        button.textContent = "Leia Mais";
    }
}

const words = ["Olá, Eu sou...."];
let charIndex = 0;
let isDeleting = false;
const speed = 200; // Velocidade da digitação
const delayBetweenWords = 5000; // Tempo antes de apagar (5s)
const restartDelay = 1000; // 20 segundos antes de reiniciar a animação

function typeEffect() {
    const dynamicText = document.getElementById("dynamic-text");

    if (!isDeleting && charIndex < words[0].length) {
        // Adiciona letras
        dynamicText.innerHTML = words[0].substring(0, charIndex++);
        setTimeout(typeEffect, speed);
    } else if (isDeleting && charIndex > 0) {
        // Remove letras
        dynamicText.innerHTML = words[0].substring(0, charIndex--);
        setTimeout(typeEffect, speed);
    } else {
        if (!isDeleting) {
            // Espera antes de começar a apagar
            isDeleting = true;
            setTimeout(typeEffect, delayBetweenWords);
        } else {
            // Aguarda 20 segundos antes de reiniciar
            isDeleting = false;
            charIndex = 0;
            setTimeout(typeEffect, restartDelay);
        }
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);
