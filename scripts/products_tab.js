let btnLinks = [...document.querySelectorAll('[data-tabs]')];
let tabs = [...document.querySelectorAll('[data-tabs-content]')];

changeProductsTitle();
addEventListener('resize', changeProductsTitle);

function changeProductsTitle() {
    let productsTitle = document.querySelector('.products__title');
    if (innerWidth <= 768) {
        productsTitle.innerHTML = 'Наши услуги';
    } else {
        productsTitle.innerHTML = 'Наши продукты';
    }
}

btnLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        let linkAtr = link.getAttribute('data-tabs');
        tabs.forEach((tab) => {
            let tabAtr = tab.getAttribute('data-tabs-content');
            if (linkAtr == tabAtr) {
                tab.classList.add('active');
                btnLinks.forEach((item) => item.classList.remove('active'));
                link.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
    });
});