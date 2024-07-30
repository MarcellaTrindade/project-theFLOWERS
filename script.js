function loadComponent(elementId, componentPath, cssPath) {
    fetch(componentPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            if (cssPath) {
                loadCSS(cssPath);
            }
        })
        .catch(error => console.error('Error loading component:', error));
}

function loadCSS(cssPath) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssPath;
    document.head.appendChild(link);
}

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("nav", "components/nav/nav.html", "components/nav/nav.css", "/style.css");
    loadComponent("section", "components/section/section.html", "components/section/section.css", "/style.css");

});