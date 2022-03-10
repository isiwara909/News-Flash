const selectElement = selector => {


    const element = document.querySelector(selector)
    if(element) return element;
    throw new Error('somthing went wrong');
}

const scrollHeader =() =>{

    const headerElement = selectElement('#header');
    if(this.scrollY >= 15){

        headerElement.classList.add('activated')

    }
    else{

        headerElement.classList.remove('activated');
    }
}

window.addEventListener('scroll',scrollHeader);


///open menu

const menuToggleIcon = selectElement('#menu-toggle-icon');
const togleMenu = () => {

    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
}
menuToggleIcon.addEventListener('click', togleMenu);


///switch theme

const bodyElement = document.body;
const themeTogglebtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

if(currentTheme){

    bodyElement.classList.add('light-theme');

}

themeTogglebtn.addEventListener('click', () => {
    bodyElement.classList.toggle('light-theme');

    if(bodyElement.classList.contains('light-theme')){

        localStorage.setItem('currentTheme','themeActive');

    }
    else{

        localStorage.removeItem('currentTheme');
    }
});

const formOpenBtn = selectElement('#search-icon');
const formCloseBtn = selectElement('#form-close-btn');
const searchFormContainer = selectElement('#search-form-container');

formOpenBtn.addEventListener('click', () => searchFormContainer.classList.add('activated'));
formCloseBtn.addEventListener('click', () => searchFormContainer.classList.remove('activated'));


//swiper

const swiper = new swiper('.swiper',{

    slidesPreView: 1,
    spaceBetween : 20,
    navigation : {

        nextEl : '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {

        el: '.swiper-pagination'
    },
    breakpoints :{
        700: {

            slidesPreView: 2
        },
        1200: {

            slidesPreView: 3
        }
 
    }

});