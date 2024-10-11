// Temporära värden för att testa inlogg
const username = 'test';
const password = '1234';

//Funktion för att verifiera inloggningen
export function verifyLogin() {
    //Hämtar värden från inputfältet
    const submittedUsername = document.getElementById('username').value;
    const submittedPassword = document.getElementById('password').value;
    
    if (submittedUsername == username && submittedPassword == password) {
        console.log('Inloggad');
    } else {
        console.log('Fel användarnamn eller lösenord');
    }

}