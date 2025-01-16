function applyDarkModePreference() {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
        document.body.classList.add("dark-mode");
    } else if (storedTheme === "light") {
        document.body.classList.remove("dark-mode");
    } else {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Appliquer immédiatement le thème dès le chargement de la page
document.addEventListener("DOMContentLoaded", applyDarkModePreference);
