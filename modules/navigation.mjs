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

export function checkIfLoggedIn() {
    if (localStorage.getItem('isUserLoggedIn') === 'true') {
        navigateTo('kanbanBoard');
    } else {
        navigateTo('landingPage');
    }
}