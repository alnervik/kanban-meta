import { deleteCard, saveCard,updateCard } from "./cardStorage.mjs";
import { handleDelete, onDragStart } from "./dragAndDrop.mjs";

export function createCard(columnId, cardText = "", cardId = null){ // Implementerar funktion för att skapa kort (Sätter krav på ID och text för localstorage)
    let cardElem = document.createElement("div"); 
    cardElem.className = "cardElem";
    cardElem.setAttribute("draggable", "true");

    //Skapar ID för varje kort
    if(cardId)
    {
        cardElem.id = cardId;
    }
    else
    {
        const newCardId = "card_" + new Date().getTime();
        cardElem.id = newCardId;
        cardId = newCardId;
    };
    
    //Skapar eventlistener för onDragStart funktionen
    cardElem.addEventListener("dragstart", function(event)
    {
        onDragStart(event);
    });

    let inputElem = document.createElement("textarea");
    inputElem.className = "textarea"
    inputElem.value = cardText;
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

    let deleteBtn = document.createElement("button"); // Skapar knapp för ta bort kort
    deleteBtn.className = "deleteBtn";
    deleteBtn.innerText = "Delete";
    cardElem.appendChild(deleteBtn);

  

    addCard.addEventListener("click", function(){ // Skapar click-event på Add card knapp

        if (inputElem.value != ""){ // Om input-elementet innehåller text körs koden nedanför
            editBtn.style.display = "inline-block";
            addCard.style.display = "none";
            inputElem.setAttribute("disabled", ""); 

            //Sparar kortet i localstorage med rätt ID
            saveCard(columnId, cardId, inputElem.value);
        }
       
    })

    deleteBtn.addEventListener("click", function(e){
        let cardToDelete = e.target.parentNode;

        const columnId = cardToDelete.parentNode.id;
        const cardId = cardToDelete.id;

        handleDelete(columnId, cardId, cardToDelete);
    })
    
    
    editBtn.addEventListener("click", function() {
        inputElem.removeAttribute("disabled");
        addCard.style.display = "inline-block";
        addCard.innerText = "Save changes";
        editBtn.style.display = "none";

        //Uppdaterar kortet när ändringar sparas
        addCard.addEventListener("click", function() {
            updateCard(columnId, cardId, inputElem.value);
            inputElem.setAttribute("disabled", "");
            addCard.style.display = "none";
            editBtn.style.display = "inline-block";
        });
    });

    

    return cardElem;
}