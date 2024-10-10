import { createLoginForm } from "./loginForm.mjs";

// Skapar en landing page med en navbar och en login-form
export function createLandingPage() {
    const header = document.createElement('header');
    header.classList.add("navbar");
    
    const logoDiv = document.createElement('div');
    logoDiv.classList.add("navbar-logo");
    logoDiv.textContent = 'KANBAN 3';
    
    //Skapar loginknappen, öppnar popupen genom att kalla på createLoginForm
    const loginDiv = document.createElement('div');
    loginDiv.classList.add("navbar-login");
    loginDiv.textContent = 'Logga in';
    loginDiv.addEventListener('click', () => {
        const loginPopup = document.querySelector('.popup') || createLoginForm();
        if (!document.body.contains(loginPopup)) {
            document.body.appendChild(loginPopup);
        }
        loginPopup.style.display = 'flex';
    });

    // Lägger till ovanstående element först i header och sedan i root
    header.appendChild(logoDiv);
    header.appendChild(loginDiv);
    root.appendChild(header);

    const div = document.createElement('div');
    div.classList.add("landing-page");
    div.textContent = 'Välkommen till vår Kanbantastiska-bräda!';
    root.appendChild(div);

}