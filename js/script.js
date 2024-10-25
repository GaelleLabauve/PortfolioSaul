//met en place le header dans la page
fetch('assets/header.html')
.then(response => {
    if (!response.ok) {
        throw new Error('Erreur de chargement du header');
    }
    return response.text();
})
.then(data => {
    document.getElementById('header').innerHTML = data;
})
.catch(error => {
    console.error('Erreur:', error);
});

//Gestion de l'appariton du menu en ecran petit
const menuHamburger = document.querySelector(".menu-burger")
const navLinks = document.querySelector(".nav-links")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})

//Rend actif le bon onglet dans le nav
