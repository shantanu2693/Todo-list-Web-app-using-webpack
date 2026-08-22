import plus from './svg/plus.svg';
import { Project } from './project.js';
export { initializeDOM, initializeDefaultProject , renderTodoDialog };

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
    addToDoItemButton.addEventListener('click', () => {
        renderTodoDialog();
    });
    
    div.appendChild(addPlusSVG);
    div.appendChild(addToDoItemButton);
    todoList.appendChild(div);
}

function initializeDefaultProject() {
    const project = new Project('My Project');
    
    const projectName = project.getProjectName();
    
    const projectElement = document.createElement('li');
    projectElement.textContent = projectName;
    document.querySelector('.project-list').appendChild(projectElement);
}

function renderTodoDialog() {
    const dialog = document.getElementById('todo-dialog');
    dialog.showModal();

    const form = dialog.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const todo = form.querySelector('#todo').value;
        const description = form.querySelector('#description').value;
        const dueDate = form.querySelector('#dueDate').value;
        const priority = form.querySelector('#priority').value;
        addTodoItem(todo, description, dueDate, priority);
        dialog.close();
    });
    
    const cancelBtn = dialog.querySelector('#cancel-btn');
    cancelBtn.addEventListener('click', () => {
        dialog.close();
    });
}

