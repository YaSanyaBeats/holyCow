const isMobile = document.documentElement.clientWidth < 768;
const isTablet = document.documentElement.clientWidth < 1140;

function isWebp() {
    // Проверка поддержки webp
    const testWebp = (callback) => {
        const webP = new Image();

        webP.onload = webP.onerror = () => callback(webP.height === 2);
        webP.src =
        'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    };

    // Добавление класса _webp или _no-webp для HTML
    testWebp((support) => {
        const className = support ? 'webp' : 'no-webp';
        document.querySelector('html').classList.add(className);
        console.log(support ? 'webp поддерживается' : 'webp не поддерживается');
    });
}

isWebp();

function initSliders() {
    let productCardSliders = new Swiper('.product__swiper', {
        loop: true,
        slidesPerView: 1,

        // pagination: {
        //     el: '.product__pagination',
        //     clickable: true
        // },

        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })

    let catalogDetailSlider = new Swiper('.slideshow', {
        slidesPerView: 1,
        spaceBetween: 20,

        navigation: {
            nextEl: '.slideshow__nav_next',
            prevEl: '.slideshow__nav_prev',
        },

        breakpoints: {
            768: {
                slidesPerView: 'auto',
            }
        }
    })
}

function initCatalogFilter() {
    let filterButton = document.querySelector('.catalog__filter-btn');
    let sidebar = document.querySelector('.catalog__sidebar');
    let catalogGrid = document.querySelector('.catalog__grid');
    let timeoutID;
    if (filterButton) {
        filterButton.addEventListener('click', (event) => {
            clearTimeout(timeoutID);
            filterButton.classList.toggle('btn_accent');
            filterButton.classList.toggle('catalog__filter-btn_active');
            sidebar.classList.toggle('catalog__sidebar_active');
            
            catalogGrid.classList.add('catalog__grid_hidden');
            timeoutID = setTimeout(() => {
                catalogGrid.classList.remove('catalog__grid_hidden');
                catalogGrid.classList.toggle('catalog__grid_slim');
            }, 200)
        })
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    initSliders();
    if(!isTablet) {
        initCatalogFilter();
    }
    
})