function toggleDarkMode() {
    const body = document.body;
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
}

function toggleLightMode() {
    const body = document.body;
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
}
