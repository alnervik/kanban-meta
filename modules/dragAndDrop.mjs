import { createCard } from "./createCardScript.mjs";
import { saveCard,loadCard,loadCards,updateCard, deleteCard } from "./cardStorage.mjs";

//Skapar funktion för att starta ondrag och sätter ID
export function onDragStart(event)
{
    event.dataTransfer.setData("text", event.target.id);
};

//Skapar funktion för att hantera vad som händer när kortet släpps i sin nya kolumn
export function onDrop(event)
{
    //Tar bort standard beteendet för drop
    event.preventDefault();

    //Identifierar vilket kort och vart det ska släppas
    const id = event.dataTransfer.getData("text");
    const draggableElement = document.getElementById(id);
    const dropZone = event.target;

    //Ser till att både dropzone och kortet man drar existerar och om det gör det hämtas alla kort i den nya kolumnen
    //och sparar kortet i den nya kolumnen
    if (dropZone && draggableElement)
    {

        const newColumnId = dropZone.id;

        const oldColumnId = draggableElement.parentElement.id;
        dropZone.appendChild(draggableElement);

        updateStorageAfterMove(newColumnId, oldColumnId, id);

    event.dataTransfer.clearData();
    
};
};

//Skapar funktion för att kunna göra en drop
export function onDragOver(event)
{
    event.preventDefault();
};

export function updateStorageAfterMove(newColumnId, oldColumnId, cardId)
{
    //Uppdaterar gamla kolumnen
    const oldCards = loadCard(oldColumnId).filter(card => card.id !== cardId);
    localStorage.setItem(oldColumnId, JSON.stringify(oldCards));

    //Uppdaterar nya kolumnen
    const newCards = loadCard(newColumnId);
    const cardText = document.getElementById(cardId).querySelector(".textarea").value;
    newCards.push({id: cardId, text: cardText});
    localStorage.setItem(newColumnId, JSON.stringify(newCards));
};

export function handleDelete(columnId, cardId, cardElement)
{
    deleteCard(columnId, cardId);
    cardElement.remove();
}