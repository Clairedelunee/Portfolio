
function ajouterClasseSiSurPage(elementId, pagePartielle, classe) {
    // Vérifie si l'utilisateur est sur la page spécifique
    if (window.location.href.indexOf(pagePartielle) > -1) {
        // Récupère l'élément par son ID
        var element = document.getElementById(elementId);

        // Ajoute la classe à l'élément
        if (element) {
            element.classList.add(classe);
        }
    }
}


document.addEventListener("DOMContentLoaded", function() {
    // Utilisation de la fonction pour ajouter la classe sur différentes pages
    ajouterClasseSiSurPage("indexpage", "index.html", "portfolioactif");
    ajouterClasseSiSurPage("pagecontact", "contact.html", "contactactive");
    // Ajoutez autant d'appels que nécessaire pour les différentes pages
});
