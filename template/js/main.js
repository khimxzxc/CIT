document.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelector('.tabs');
    const tabsBtn = document.querySelectorAll('.tabs__btn');
    const tabsContent = document.querySelectorAll('.tabs__content');

    if (tabs) {
        tabs.addEventListener('click', (e) => {
            if (e.target.classList.contains('tabs__btn')){
                const tabsPath = e.target.dataset.tabsPath;
                tabsHandler(tabsPath);
            } 
        })            
    }

    const tabsHandler = (path) => {
        tabsBtn.forEach(el => {el.classList.remove('tabs__btn--active')});
        document.querySelector(`[data-tabs-path="${path}"]`).classList.add('tabs__btn--active');

        tabsContent.forEach(el => {el.classList.remove('tabs__content--active')});
        document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content--active');
    };



    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(el => {
      el.addEventListener('click', (e) => {
        const self = e.currentTarget;
        const control = self.querySelector('.accordion__control'); 
        const content = self.querySelector('.accordion__content');

        self.classList.toggle('open');

        if(self.classList.contains('open')){
          content.style.maxHeight = content.scrollHeight + 'px';
        }else{
          content.style.maxHeight = null;
        }

      });

    });

    const burger = document?.querySelector('[data-burger]');
    const nav = document?.querySelector('[data-nav]');
    
    burger?.addEventListener('click', () => {
        burger?.classList.toggle('burger--active');
        nav?.classList.toggle('nav--visible');
    });
    
    let swiper = new Swiper(".mySwiper", {
        loop: true,  
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          "@0.00": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        },
    });
    
    const form = document.querySelector('.form');
      const telSelector = form.querySelector('input[type="tel"]');
      const inputMask = new Inputmask('+7 (999) 999-99-99');
      inputMask.mask(telSelector);

});

