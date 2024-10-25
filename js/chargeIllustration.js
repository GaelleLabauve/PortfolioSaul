
/* ==================== */
/*      GALERIE         */
/* ==================== */
const images = [
    'illu1.JPG',
    'illu2.JPG',
    'illu3.png',
    'menu.png'
];

const imageContainer = document.getElementById('galerie');

images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = `images/${image}`;
    imgElement.alt = image;

    imageContainer.appendChild(imgElement);
});


/* ==================== */
/*      SLIDER          */
/* ==================== */
const imgSlider = [
    'illu1.JPG',
    'illu2.JPG',
    'illu3.png'
]

const imagebox = document.getElementById('image-box');
const imagebg = document.getElementById('image-bg');

imgSlider.forEach(image => {
    const radioElement = document.createElement('input');
    radioElement.type = 'radio'
    radioElement.name = 'image'
    radioElement.style.backgroundImage = `url(images/${image})`;
    radioElement.style.backgroundSize = 'cover';

    radioElement.addEventListener('change', () => {
        if (radioElement.checked) {
            imagebg.style.backgroundImage = radioElement.style.backgroundImage;
        }
    });

    imagebox.appendChild(radioElement);
});
