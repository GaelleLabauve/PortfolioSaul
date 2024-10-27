
/* ==================== */
/*      GALERIE         */
/* ==================== */
const images = [
    'chat_bain.png',
    'banner.jpg',
    'caracter_saul.jpg',
    'avatar.jpg'
];

const imageContainer = document.querySelector('.galerie');
const galleryItem = [];
let index = 1;
images.forEach(image => {
    const divElement = document.createElement('div');
    divElement.classList.add('gallery-item');
    divElement.setAttribute('data-index', index);
    index += 1;
    const imgElement = document.createElement('img');
    imgElement.src = `images/${image}`;
    imgElement.alt = image;

    divElement.appendChild(imgElement);
    imageContainer.appendChild(divElement);

    galleryItem.push(divElement);
});

//element for lightbox
const lightBoxcontainer =  document.createElement('div');
const lightBoxContent =  document.createElement('div');
const lightBoxImg =  document.createElement('img');
const lightBoxPrev =  document.createElement('div');
const lightBoxNext =  document.createElement('div');

//create classlist
lightBoxcontainer.classList.add('lightbox')
lightBoxContent.classList.add('lightbox-content')
lightBoxPrev.classList.add('fa', 'fa-angle-left','lightbox-prev')
lightBoxNext.classList.add('fa', 'fa-angle-right','lightbox-next')

lightBoxcontainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxcontainer.appendChild(lightBoxPrev);
lightBoxcontainer.appendChild(lightBoxNext);
document.body.appendChild(lightBoxcontainer);

index = 1;

function showLightBox(n){
    if (n > galleryItem.length){
        index = 1;
    } else if (n<1){
        index = galleryItem.length; 
    }

    let imageLocation = galleryItem[index-1].children[0].getAttribute("src");
    lightBoxImg.setAttribute("src", imageLocation);
}

function currentImage(){
    lightBoxcontainer.style.display="flex";

    let imageIndex = parseInt(this.getAttribute("data-index"));
    showLightBox(index = imageIndex)
}

console.log(galleryItem)
for (let i= 0; i<galleryItem.length; i++){
    console.log("entre")
    galleryItem[i].addEventListener("click", currentImage);
}

function sliderImage(n){
    showLightBox(index += n);
}

function prevImage(){
    sliderImage(-1);
}

function nextImage(){
    sliderImage(1);
}

lightBoxPrev.addEventListener("click", prevImage);
lightBoxNext.addEventListener("click", nextImage);

//close lightbox

function closeLightBox(){
    if(this === event.target){
        lightBoxcontainer.style.display = "none";
    }
}

lightBoxcontainer.addEventListener("click", closeLightBox);



/* ==================== */
/*      SLIDER          */
/* ==================== */
const imgSlider = [
    'banner.jpg',
    'caracter_saul.jpg',
    'avatar.jpg'
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
