import { createNewElement } from './createNewElement.mjs';
import { createCard } from './createCardScript.mjs';

export function createKanbanBoard() {
   const mainContent = document.getElementById('mainContent');
   mainContent.innerText = null;
   const kanbanContainer = createNewElement('div', null, 'kanbanContainer', null, mainContent);
   const todo = createNewElement('div', 'To do', 'todo', 'kanbanColumn', kanbanContainer);
   const doing = createNewElement('div', 'Doing', 'doing', 'kanbanColumn', kanbanContainer);
   const testing = createNewElement('div', 'Testing', 'testing', 'kanbanColumn', kanbanContainer);
   const done = createNewElement('div', 'Done', 'done', 'kanbanColumn', kanbanContainer);

   const columnsArray = [todo, doing, testing, done];

   columnsArray.forEach(column => {
      column.appendChild(createCard());
   });
}