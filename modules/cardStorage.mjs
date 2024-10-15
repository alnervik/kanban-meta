import { createCard } from './createCardScript.mjs';
//Skapar funktion för att spara korten i localstorage med rätt ID
//error meddelande ifall det inte finns ett ID
export function saveCard(columnId, text)
{
    if(!columnId)
    {
        console.error("columnId finns inte");
        return;
    }

    const existerandekort = JSON.parse(localStorage.getItem(columnId)) || [];
    existerandekort.push(text);
    localStorage.setItem(columnId, JSON.stringify(existerandekort));
};

//Skapar funktion för att ladda korten med rätt ID och lägger in error meddelande ifall det inte
//finns ett ID
export function loadCard(columnId) {
    
    if (!columnId) {
        console.error("columnId finns inte");
        return;
    }

    return JSON.parse(localStorage.getItem(columnId)) || [];
}

//Skapar en funktion för att ladda korten när sidan laddas
export function loadCards(columnId)
{
    
    const cards = loadCard(columnId); // Hämta korten med rätt ID
    //Går igenom alla kort och lägger in samma CSS som tidigare på dom
    cards.map(cardContent => {
        const card = createCard(columnId);
        card.querySelector(".textarea").value = cardContent;
        card.querySelector(".textarea").setAttribute("disabled", "");
        card.querySelector(".addCard").style.display = "none";
        card.querySelector(".editBtn").style.display = "inline-block";
        document.getElementById(columnId).appendChild(card); //Lägger till kortet i kolumnen
    });
}