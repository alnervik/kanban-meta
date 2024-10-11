import { verifyLogin } from "./verifyLogin.mjs";

// Skapar en popup med en login-form
export function createLoginForm() {
    const popup = document.createElement('div');
    popup.classList.add('popup');

    // Skapar container för hela popupen
    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');

    // Skapar en knapp för att stänga popupen, vid klick stängs den
    const closeBtn = document.createElement('span');
    closeBtn.classList.add('close-btn');
    closeBtn.textContent = 'X';
    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Skapar container för login-formen
    const form = document.createElement('form');
    form.classList.add('login-form');

    // Skapar input för användarnamn
    const usernameInput = document.createElement('input');
    usernameInput.id = 'username';
    usernameInput.type = 'text';
    usernameInput.placeholder = 'Användarnamn';

    // Skapar input för lösenord, använder type password för att dölja lösenordet
    const passwordInput = document.createElement('input');
    passwordInput.id = 'password';
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Lösenord';

    // Skapar en submit-knapp
    // Vid klick kallas verifyLogin funktionen
    const submitBtn = document.createElement('button');
    submitBtn.id = 'submitBtn';
    submitBtn.type = 'button';
    submitBtn.textContent = 'Logga in';
    submitBtn.addEventListener('click', (event) => { verifyLogin() });

    form.appendChild(usernameInput);
    form.appendChild(passwordInput);
    form.appendChild(submitBtn);

    popupContent.appendChild(closeBtn);
    popupContent.appendChild(form);
    popup.appendChild(popupContent);

    // Stänger popupen när man klickar utanför
    popup.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });

    return popup;
}