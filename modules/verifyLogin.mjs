// Temporära värden för att testa inlogg
const username = 'test';
const password = '1234';

//Funktion för att verifiera inloggningen
export function verifyLogin() {
    //Hämtar värden från inputfältet
    const submittedUsername = document.getElementById('username').value;
    const submittedPassword = document.getElementById('password').value;
    
    //Hämtar data från users.json
    fetch('./users.json')
    .then(res => res.json())
    .then(users => {
        //Använder .find för att hitta användaren som matchar inmatade värden
        const matchingUser = users.find(user =>
            user.username == submittedUsername && user.password == submittedPassword);
    })
}