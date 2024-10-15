import { createNewElement } from './createNewElement.mjs';
import { createCard } from './createCardScript.mjs';

export function createKanbanBoard() {
   //Ändrade till root då vi har en root i index.html
   //men skapar mainContent sedan för att kunna placera den i root och framöver placera resterande element i mainContent
   const root = document.getElementById('root');
   root.innerHTML = '';
   const mainContent = createNewElement('div', null, 'mainContent', null, root);

   // Skapar kolumnerna samt container för kolumnerna
   const kanbanContainer = createNewElement('div', null, 'kanbanContainer', null, mainContent);
   const todo = createNewElement('div', 'To do', 'todo', 'kanbanColumn', kanbanContainer);
   const doing = createNewElement('div', 'Doing', 'doing', 'kanbanColumn', kanbanContainer);
   const testing = createNewElement('div', 'Testing', 'testing', 'kanbanColumn', kanbanContainer);
   const done = createNewElement('div', 'Done', 'done', 'kanbanColumn', kanbanContainer);

   // Går igenom varje kolumn och lägger till ett tomt kort
   const columnsArray = [todo, doing, testing, done];
   columnsArray.forEach(column => {
      column.appendChild(createCard());
      addButtonListener(column);
   });

   const textarea = document.querySelector('textarea');



   // Detta körs i en egen funktion är för att column ändrar värde och måste skickas in som en parameter för att behålla sitt rätta värde
   function addButtonListener(column) {
      // Hämtar det sista elementet i DOM:en med klassen addCard och lägger till eventListenern på det
      const numberOfCards = column.getElementsByClassName('addCard').length;
      const lastCard = column.getElementsByClassName('addCard')[numberOfCards - 1];
      lastCard.onclick = () => {
         if (lastCard.innerText !== 'Save changes') {
            column.appendChild(createCard());
            // Kör funktionen igen för att lägga till eventListener på det nyskapade kortet
            addButtonListener(column);
         }
      };

      // Gör så att textrutans storlek anpassar sig till innehållet
      const textarea = lastCard.parentElement.querySelector('textarea');
      textarea.addEventListener('input', () => {
         textarea.style.height = 'auto';
         textarea.style.height = (textarea.scrollHeight) + 'px';
      });
   }
}