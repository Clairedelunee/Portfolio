// Fonction pour appliquer le mode sombre si activé dans les préférences système
function applyDarkModePreference() {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    } else if (localStorage.getItem("theme") === "light") {
        document.body.classList.remove("dark-mode");
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add("dark-mode");
    }
}

// Fonction pour basculer entre mode clair et sombre
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    // Sauvegarde la préférence utilisateur
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Appliquer le mode sombre dès le chargement de la page
applyDarkModePreference();

// Surveiller si l'utilisateur change les paramètres du système en direct
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyDarkModePreference);

// Ajouter un bouton pour changer de mode
document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("toggle-theme");
    if (button) {
        button.addEventListener("click", toggleDarkMode);
    }
});
