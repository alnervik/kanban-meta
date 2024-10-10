export function createCard(){ // Implementerar funktion för att skapa kort
    let cardElem = document.createElement("div"); 
    cardElem.className = "cardElem";
    let inputElem = document.createElement("textarea");
    inputElem.className = "textarea"
    cardElem.appendChild(inputElem);

    let addCard = document.createElement("button"); // Skapar knapp för att lägga till kort
    addCard.className = "addCard";
    addCard.innerText = "Add card";
    cardElem.appendChild(addCard);
    
    let editBtn = document.createElement("button"); // Skapar knapp för redigeringsfunktionen
    editBtn.className = "editBtn";
    editBtn.innerText = "Edit";
    cardElem.appendChild(editBtn);

    editBtn.style.display = "none"; // Tar bort redigeringsknapp från DOM

    addCard.addEventListener("click", function(){ // Skapar click-event på Add card knapp
        if (inputElem.value != ""){ // Om input-elementet innehåller text körs koden nedanför
            editBtn.style.display = "inline-block";
            addCard.style.display = "none";
            inputElem.setAttribute("disabled", ""); 
        }
       
    })
    
    
    editBtn.addEventListener("click", function(){ // Skapar click-event på Edit knapp
        inputElem.removeAttribute("disabled");
        addCard.style.display = "inline-block";
        addCard.innerText = "Save changes";
        editBtn.style.display = "none";

    })

    

    return cardElem;
}