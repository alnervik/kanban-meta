export function createCard(){ // implementerar funktion för att skapa kort
    let cardElem = document.createElement("div"); 
    cardElem.className = "cardElem";
    let inputElem = document.createElement("textarea");
    inputElem.className = "textarea"
    cardElem.appendChild(inputElem);
    
    let editBtn = document.createElement("button"); // Skapar knapp för redigeringsfunktionen
    editBtn.className = "editBtn";
    editBtn.innerText = "Edit";
    cardElem.appendChild(editBtn); 

    return cardElem;
}