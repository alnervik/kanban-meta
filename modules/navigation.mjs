import { createLandingPage } from './createLandingPage.mjs';
import { createKanbanBoard } from './createKanbanBoard.mjs';

export function navigateTo(page) {
    const root = document.getElementById('root');
    root.innerHTML = '';
    
    switch(page) {
        case 'landingPage':
            createLandingPage();
            break;
        case 'kanbanBoard':
            createKanbanBoard();
            break;
        default:
            createLandingPage();
    }
}

//inte riktigt klar med att koppla på denna funktion
export function checkIfLoggedIn() {
    if (localStorage.getItem('isUserLoggedIn') === 'yes') {
        navigateTo('kanbanBoard');
    } else {
        navigateTo('landingPage');
    }
}