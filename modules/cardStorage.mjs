import { createCard } from './createCardScript.mjs';


//Skapar funktion för att spara korten i localstorage med rätt ID
//error meddelande ifall ID inte finns
export function saveCard(columnId, cardId, text) {
    if (!columnId) {
        console.error("columnId finns inte");
        return;
    }

    const existingCards = JSON.parse(localStorage.getItem(columnId)) || [];

    //Kontrollerar om kortet redan existerar
    let cardExists = false;
    existingCards.forEach(card => 
    {
        if(card.id == cardId)
        {
            card.text = text; //Uppdaterar texten
            cardExists = true;
        }
    });

    if(!cardExists)
    {
        existingCards.push({id: cardId, text: text});
    }

    localStorage.setItem(columnId, JSON.stringify(existingCards));
};

//Skapar funktion för att ladda korten med rätt ID
//error meddelande ifall ID inte finns
export function loadCard(columnId) {
    if (!columnId) {
        console.error("columnId finns inte");
        return;
    }

    return JSON.parse(localStorage.getItem(columnId)) || [];
    
}

//Skapar funktion för att ladda rätt kort när sidan laddas om
export function loadCards(columnId) {
    const cards = loadCard(columnId); // Hämtar korten med rätt ID

    //Går igenom alla kort lägger till texten ifall dom inte har det och lägger till samma CSS som tidigare
    cards.forEach(card => {
        if (card.text && card.text.trim() !== "") {
            const cardElement = createCard(columnId, card.text, card.id);
            //cardElement.id = card.id;
            cardElement.querySelector(".textarea").value = card.text;
            cardElement.querySelector(".textarea").setAttribute("disabled", "");
            cardElement.querySelector(".addCard").style.display = "none";
            cardElement.querySelector(".editBtn").style.display = "inline-block";
            document.getElementById(columnId).appendChild(cardElement); //Lägger till kortet i kolumnen
        }
    });
    
}

//Skapar en funktion för att uppdatera texten i localstorage när man ändrar kortet.
export function updateCard(columnId, cardId, newText) {
    const existingCards = JSON.parse(localStorage.getItem(columnId)) || [];

    const updatedCards = existingCards.map(card => {
        if (card.id == cardId) {
            return { id: cardId, text: newText }; //Uppdaterar texten
        }
        return card; //Behåller övriga kort
    });

    localStorage.setItem(columnId, JSON.stringify(updatedCards));
}

//Skapar funktion för att ta bort kort från localstorage
export function deleteCard(columnId, cardId)
{
    const existingCards = JSON.parse(localStorage.getItem(columnId)) || [];
    const updatedCards = existingCards.filter(card => card.id !== cardId);
    localStorage.setItem(columnId, JSON.stringify(updatedCards));
};
