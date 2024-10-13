import { verifyLogin } from "./verifyLogin.mjs";
import { createNewElement } from "./createNewElement.mjs";

// Skapar en popup med en login-form
export function createLoginForm() {
    const popup = createNewElement('div', null, null, 'popup', null);

    // Skapar container för hela popupen
    const popupContent = createNewElement('div', null, null, 'popup-content', popup);

    // Skapar en knapp för att stänga popupen, vid klick stängs den
    const closeBtn = createNewElement('span', 'X', null, 'close-btn', popupContent);
    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Skapar container för login-formen
    const form = createNewElement('form', null, null, 'login-form', popupContent);

    // Skapar input för användarnamn
    const usernameInput = createNewElement('input', null, 'username', null, form);
    usernameInput.type = 'text';
    usernameInput.placeholder = 'Användarnamn';

    // Skapar input för lösenord, använder type password för att dölja lösenordet
    const passwordInput = createNewElement('input', null, 'password', null, form);
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Lösenord';

    // Skapar en submit-knapp
    // Vid klick kallas verifyLogin funktionen
    const submitBtn = createNewElement('button', 'Logga in', 'submitBtn', null, form);
    submitBtn.type = 'button';
    submitBtn.addEventListener('click', (event) => { verifyLogin() });

    // Stänger popupen när man klickar utanför
    popup.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });

    return popup;
}
