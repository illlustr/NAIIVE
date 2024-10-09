
// MENU START //
function toggleMenu() {
    const sideMenu = document.getElementById("menu");
    const body = document.body;

    if (sideMenu.style.width >= "100px") {
        closeMenu();
    } else {
        openMenu();
    }
}
function openMenu() {
    const sideMenu = document.getElementById("menu");
    const body = document.body;

    sideMenu.style.width = "256px";
    body.classList.add("menu-open");
}
function closeMenu() {
    const sideMenu = document.getElementById("menu");
    const body = document.body;

    sideMenu.style.width = "0";
    body.classList.remove("menu-open");
}
// MENU END //

// THEME START //
const darkModeBtn = document.getElementById('darkMode');
const lightModeBtn = document.getElementById('lightMode');
const autoModeBtn = document.getElementById('autoMode');
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'auto';
    setTheme(savedTheme);
}
function setTheme(theme) {
    document.body.className = '';
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
        setActiveButton(darkModeBtn);
    } else if (theme === 'light') {
        document.body.classList.add('light-theme');
        setActiveButton(lightModeBtn);
    } else {
        const userPreference = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
        setTheme(userPreference);
        setActiveButton(autoModeBtn);
    }
    localStorage.setItem('theme', theme);
    closeMenu();
}
function setActiveButton(activeButton) {
    const buttons = [darkModeBtn, lightModeBtn, autoModeBtn];
    buttons.forEach(button => button.classList.remove('active'));
    activeButton.classList.add('active');
}
darkModeBtn.addEventListener('click', () => setTheme('dark'));
lightModeBtn.addEventListener('click', () => setTheme('light'));
autoModeBtn.addEventListener('click', () => setTheme('auto'));
loadTheme();
// THEME END //