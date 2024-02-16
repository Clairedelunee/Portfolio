// JavaScript (script.js)
function ajouterClasseSiSurPage(elementId, pagePartielle, classe) {
    if (window.location.href.indexOf(pagePartielle) > -1) {
        var element = document.getElementById(elementId);
        if (element) {
            element.classList.add(classe);
        }
    }
}
