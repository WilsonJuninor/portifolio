
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

  