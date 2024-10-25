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

    //Gestion de l'appariton du menu en ecran petit
    const menuHamburger = document.querySelector(".menu-burger")
    const navLinks = document.querySelector(".nav-links")
    
    menuHamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
    })

    const currentUrl = window.location.pathname; // Récupérer le chemin de l'URL actuelle
    const links = document.querySelectorAll('.nav-links a'); // Sélectionner tous les liens

    links.forEach(link => {
        if (link.getAttribute('href') === currentUrl.substring(1)) {
            link.parentElement.classList.add('active'); // Ajouter la classe 'active' à l'élément parent <li>
        } else {
            link.parentElement.classList.remove('active'); // Retirer la classe 'active' des autres
        }
    });
    
})
.catch(error => {
    console.error('Erreur:', error);
});

//Rend actif le bon onglet dans le nav
