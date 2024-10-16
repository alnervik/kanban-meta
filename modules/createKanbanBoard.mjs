import { createNewElement } from './createNewElement.mjs';
import { createCard } from './createCardScript.mjs';
import { loadCards } from "./cardStorage.mjs";
import { navigateTo } from "./navigation.mjs";
import { onDragOver, onDrop } from './dragAndDrop.mjs';

export function createKanbanBoard() {
   // Ändrade till root då vi har en root i index.html
   // men skapar mainContent sedan för att kunna placera den i root och framöver placera resterande element i mainContent
   const root = document.getElementById('root');
   root.innerHTML = '';

   const header = createNewElement('header', null, null, 'navbar', root);
   const logoDiv = createNewElement('div', 'KANBAN 3', null, 'navbar-logo', header);
   const logoutDiv = createNewElement('div', 'Logga ut', null, 'navbar-logout', header);

   logoutDiv.addEventListener('click', () => {
      localStorage.removeItem('isUserLoggedIn');
      navigateTo('landingPage');
   });

   const mainContent = createNewElement('div', null, 'mainContent', null, root);

   // Skapar kolumnerna samt container för kolumnerna
   const kanbanContainer = createNewElement('div', null, 'kanbanContainer', null, mainContent);
   const todo = createNewElement('div', 'To do', 'todo', 'kanbanColumn', kanbanContainer);
   const doing = createNewElement('div', 'Doing', 'doing', 'kanbanColumn', kanbanContainer);
   const testing = createNewElement('div', 'Testing', 'testing', 'kanbanColumn', kanbanContainer);
   const done = createNewElement('div', 'Done', 'done', 'kanbanColumn', kanbanContainer);

   //Skapar eventlistener till kolumnerna för onDragOver och onDrop funktionerna
   [todo, doing, testing, done].forEach(column => 
   {
      column.addEventListener("dragover", (event) => onDragOver(event));
      column.addEventListener("drop", (event) => onDrop(event));
   });

   //Laddar korten från localstorage för varje kolumn
   loadCards(todo.id);
   loadCards(doing.id);
   loadCards(testing.id);
   loadCards(done.id);

   // Går igenom varje kolumn och lägger till ett tomt kort
   const columnsArray = [todo, doing, testing, done];
   columnsArray.forEach(column => {
      const columnText = column.innerText;
      column.innerText = null;
      const titleContainer = createNewElement('div', columnText, 'titleContainer', 'titleContainer', column);
      const addCardButton = createNewElement('button', '+', 'addCardButton', 'addCardButton', titleContainer);
      addCardButton.onclick = () => {
         column.appendChild(createCard(column.id));
         // Gör så att textrutans storlek anpassar sig till innehållet
         const textarea = column.querySelector('textarea');
         textarea.addEventListener('input', () => {
            textarea.style.height = 'auto';
            textarea.style.height = (textarea.scrollHeight) + 'px';
         });
      };
   });
}