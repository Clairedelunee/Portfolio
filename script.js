document.addEventListener("DOMContentLoaded", function() {
    // Vérifie si l'utilisateur est sur la page spécifique
    if (window.location.href.indexOf("index.html") > -1) {
        // Récupère l'élément texte par son ID
        var monElement = document.getElementById("indexpage");

        // Ajoute la classe à l'élément texte
        monElement.classList.add("portfolioactif");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Vérifie si l'utilisateur est sur la page spécifique
    if (window.location.href.indexOf("contact.html") > -1) {
        // Récupère l'élément texte par son ID
        var monElement = document.getElementById("pagecontact");

        // Ajoute la classe à l'élément texte
        monElement.classList.add("contactactive");
    }
});