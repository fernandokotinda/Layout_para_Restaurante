//Script Para quando clicar no li chamar o link dentro dele e evitar bugs 
const listItems = document.querySelectorAll(".menu li");

    listItems.forEach(li => {
        li.addEventListener("click", () => {
            const link = li.querySelector("a");
            if (link) {
                link.click();
            }
        });
    });
    
//Script Para fazer a rolagem até a coordenada certa ao clicar em "Ver Cardápio" no menu
document.querySelector('a[href="#section-cardapio"]').addEventListener('click', function (e) {
    e.preventDefault(); 
    const targetElement = document.querySelector('#section-cardapio');
    const offset = -9 * 16; 

    if (targetElement) {
        const elementPosition = targetElement.offsetTop;
        const offsetPosition = elementPosition + offset;

        window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth', 
        });
    }
});

//Script Para fazer a rolagem até a coordenada certa ao clicar em "Contato" no menu em telas de tablets e celulares
if (window.innerWidth < 1024) {
    document.querySelector('a[href="#section_footer"]').addEventListener('click', function (e) {
        e.preventDefault(); 
        const targetElement = document.querySelector('#section_footer');
        const offset = -4 * 16; 
    
        if (targetElement) {
            const elementPosition = targetElement.offsetTop;
            const offsetPosition = elementPosition + offset;
    
            window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth', 
            });
        }
    });
}