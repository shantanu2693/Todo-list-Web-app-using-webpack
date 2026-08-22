export { initializeDOM };
import plus from './svg/plus.svg';

function initializeDOM() {
    const todoList = document.querySelector('.todo-list');
    todoList.innerHTML = '';

    const div = document.createElement('div');

    const addPlusSVG = document.createElement('img');
    addPlusSVG.src = plus;
    addPlusSVG.alt = 'Add Project';
    addPlusSVG.width = 24;
    addPlusSVG.height = 24;

    const addToDoItemButton = document.createElement('button');
    addToDoItemButton.textContent = 'Add To-Do Item';
    addToDoItemButton.className = 'addToDoItemButton';
    
    div.appendChild(addPlusSVG);
    div.appendChild(addToDoItemButton);
    todoList.appendChild(div);
}