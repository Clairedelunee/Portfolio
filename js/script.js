document.addEventListener("DOMContentLoaded", function () {
    fetch('/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;

            // Appliquer immédiatement le mode sombre après l'insertion du header
            applyDarkModePreference();

            // Ajouter l'événement au bouton après l'ajout du header
            let button = document.getElementById("toggle-theme");
            if (button) {
                button.addEventListener("click", toggleDarkMode);
            }
        })
        .catch(error => console.error('Erreur lors du chargement du header:', error));
});
