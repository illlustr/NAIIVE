// MENU LEFT START //
function menuLeft() {
    let menu = document.getElementById("menuLeft");
    if (!menu) {
        console.error("element does not exist.");
        return;
    }
    
    if (document.body.classList.contains("menu-left-open")) {
        menu.style.width = "0";
        document.body.classList.remove("menu-left-open");
        setTimeout(() => {
            menu.style.visibility = "hidden";
        }, 500); 
    } else {
        menu.style.visibility = "visible"; 
        setTimeout(() => {
            menu.style.width = "100vw"; 
        }, 10);
        document.body.classList.add("menu-left-open");
    }
}
function menuRight() {
    let menu = document.getElementById("menuRight");
    if (!menu) {
        console.error("element does not exist.");
        return;
    }
    
    if (document.body.classList.contains("menu-right-open")) {
        menu.style.width = "0";
        document.body.classList.remove("menu-right-open");
        setTimeout(() => {
            menu.style.visibility = "hidden";
        }, 500); 
    } else {
        menu.style.visibility = "visible"; 
        setTimeout(() => {
            menu.style.width = "100vw"; 
        }, 10);
        document.body.classList.add("menu-right-open");
    }
}
// MENU LEFT END //

// THEME START //
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'auto';
    setTheme(savedTheme);
}
function setTheme(theme) {
    document.body.className = ''; 
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
        setActiveButton('darkMode');
    } else if (theme === 'light') {
        document.body.classList.add('light-theme');
        setActiveButton('lightMode');
    } else {
        const userPreference = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
        setTheme(userPreference);
        setActiveButton('autoMode');
    }
    localStorage.setItem('theme', theme);
}
function setActiveButton(buttonId) {
    const buttons = ['darkMode', 'lightMode', 'autoMode'];
    buttons.forEach(id => {
        document.getElementById(id).classList.remove('active');
    });
    document.getElementById(buttonId).classList.add('active');
}
document.addEventListener('DOMContentLoaded', loadTheme);
// THEME END //