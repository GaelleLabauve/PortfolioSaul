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

//Defilement automatique
const radios = document.querySelectorAll('input[type="radio"]');
console.log(radios)
const pauseButton = document.getElementById('pauseButton');
let currentIndex = 0;
let intervalId;

function autoSelectRadio() {
    console.log("entre radio")
    radios.forEach(radio => radio.checked = false);
    radios[currentIndex].checked = true;
    imagebg.style.backgroundImage = radios[currentIndex].style.backgroundImage;
    currentIndex = (currentIndex + 1) % radios.length;
}

function startAutoSelect() {
    intervalId = setInterval(autoSelectRadio, 3000);
}

function pauseAutoSelect() {
    clearInterval(intervalId);
}

// bouton de pause
pauseButton.addEventListener('click', () => {
    if (pauseButton.classList.contains("fa-pause")) {
        pauseAutoSelect();
        pauseButton.classList.replace("fa-pause", "fa-play");
    } else {
        startAutoSelect();
        pauseButton.classList.replace("fa-play", "fa-pause");
    }
});

// Démarre le défilement automatique
startAutoSelect();
