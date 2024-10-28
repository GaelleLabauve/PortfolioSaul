import { gallery, header } from "./utils.js";

header();

/* ==================== */
/*      GALERIE         */
/* ==================== */
const images = [
    'BD_tablaux_Page1.jpg',
    'BD_tablaux_page2.jpg',
    'BD_tablau_Page3.jpg',
    'caracter_saul.jpg',
    'chat_bain.png',
    'couverture.jpg',
    'nain.jpg',
    'rouge_chat.jpg'
];

gallery(images);



/* ==================== */
/*      SLIDER          */
/* ==================== */
const imgSlider = [
    'BD_tablaux_Page1.jpg',
    'BD_tablaux_page2.jpg',
    'BD_tablau_Page3.jpg',
]

const imagebox = document.querySelector('.image-box');
const imagebg = document.querySelector('.image-bg');
let first = true;

imgSlider.forEach(image => {
    const radioElement = document.createElement('input');
    radioElement.type = 'radio'
    radioElement.name = 'image'
    radioElement.style.backgroundImage = `url(images/${image})`;
    radioElement.style.backgroundSize = 'cover';

    if(first){
        radioElement.checked = true;
        imagebg.style.backgroundImage = radioElement.style.backgroundImage;
        first = false;
    }

    radioElement.addEventListener('change', () => {
        if (radioElement.checked) {
            imagebg.style.backgroundImage = radioElement.style.backgroundImage;
        }
    });

    imagebox.appendChild(radioElement);
});
