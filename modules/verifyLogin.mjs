//Funktion för att verifiera inloggningen
export function verifyLogin() {
    //Hämtar värden från inputfältet
    const submittedUsername = document.getElementById('username').value;
    const submittedPassword = document.getElementById('password').value;
    
    //Hämtar data från users.json
    fetch('./users.json')
    .then(res => res.json())
    .then(data => {
        //Behöver få ut data.users för att kunna använda .find
        const users = data.users;

        //Använder .find för att hitta användaren som matchar inmatade värden
        const matchingUser = users.find(user => {
            return user.username === submittedUsername && user.password === submittedPassword;
        });
            //Skriver ut i loggen om användaren finns eller inte
            //(kommer fixas att du blir omdirigerad alt. felmeddelande i popup)
            if (matchingUser) {
                localStorage.setItem('isUserLoggedIn', 'true');
                //omdirigering till landingpage via kommande navigateTo-funktion
            } else {
                //Visa felmeddelande i login-popup
                const errorMessage = document.getElementById('errorMessage');
                errorMessage.innerHTML = 'Fel användarnamn eller lösenord';
                errorMessage.style.display = 'block';
        }
    });
}