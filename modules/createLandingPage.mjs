import { createLoginForm } from "./loginForm.mjs";
import { createNewElement } from "./createNewElement.mjs";

// Skapar en landing page med en navbar och en login-form
export function createLandingPage() {
    const root = document.getElementById('root');

    const header = createNewElement('header', null, null, 'navbar', root);
    
    const logoDiv = createNewElement('div', 'KANBAN 3', null, 'navbar-logo', header);
    
    //Skapar loginknappen, öppnar popupen genom att kalla på createLoginForm
    const loginDiv = createNewElement('div', 'Logga in', null, 'navbar-login', header);
    loginDiv.addEventListener('click', () => {
        const loginPopup = document.querySelector('.popup') || createLoginForm();
        if (!document.body.contains(loginPopup)) {
            document.body.appendChild(loginPopup);
        }
        loginPopup.style.display = 'flex';
    });

    const mainContent = createNewElement('div', 'Välkommen till vår Kanbantastiska-bräda!', 'mainContent', 'landing-page', root);
}