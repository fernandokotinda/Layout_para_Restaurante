//Verifica o tamanho da tela para aplicar as devidas funcionalidades e adicionar ou remover as classes necessarias
const menuOptions = document.querySelector('.menu-options');
const links = document.querySelectorAll('.link');

function handleNavDisplay() {

    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;

    if (isDesktop) {
        menuOptions.classList.add('mb-0');
        menuOptions.classList.remove('nav-links');
        links.forEach(link => link.classList.remove('nav-link'));
    } else {
        menuOptions.classList.remove('mb-0');
        menuOptions.classList.add('nav-links');
        links.forEach(link => link.classList.add('nav-link'));
    }
}

handleNavDisplay();

window.addEventListener('resize', handleNavDisplay);


//Adiciona ou remove as classes para os elementos quando clicar no menu hamburger
const hamburger = document.getElementById('hamburger');
const body = document.body;

hamburger.addEventListener('click', () => {
    menuOptions.classList.toggle('show');
    hamburger.classList.toggle('open');

    if (menuOptions.classList.contains('show')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }
});

links.forEach(link => {
    link.addEventListener('click', () => {
        menuOptions.classList.remove('show');
        hamburger.classList.remove('open');
        body.style.overflow = '';
    });
});




