import { createCard } from "./modules/createCardScript.mjs"; // importerar funktion för att skapa nya kort

const root = document.getElementById("root");

// Skapar en landing page med en navbar och en login-form
function createLandingPage() {
    const header = document.createElement('header');
    header.classList.add("navbar");
    
    const logoDiv = document.createElement('div');
    logoDiv.classList.add("navbar-logo");
    logoDiv.textContent = 'KANBAN 3';
    
    const loginDiv = document.createElement('div');
    loginDiv.classList.add("navbar-login");
    loginDiv.textContent = 'Logga in';

    // Lägger till ovanstående element först i header och sedan i root
    header.appendChild(logoDiv);
    header.appendChild(loginDiv);
    root.appendChild(header);

    const div = document.createElement('div');
    div.classList.add("landing-page");
    div.textContent = 'Välkommen till vår Kanbantastiska-bräda!';
    root.appendChild(div);

}

function createLoginForm() {

}

createLandingPage();