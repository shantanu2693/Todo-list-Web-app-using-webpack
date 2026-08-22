import plus from './svg/plus.svg';
import { Project } from './project.js';
export { initializeTodoListDOM, renderProjectDialog, initializeProjectListDOM };


function initializeTodoListDOM() {
    const todoList = document.querySelector('.todo-list');
    todoList.innerHTML = '';

    const addTodoDiv = document.createElement('div');

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
    
    addTodoDiv.appendChild(addPlusSVG);
    addTodoDiv.appendChild(addToDoItemButton);
    todoList.appendChild(addTodoDiv);
}

function initializeProjectListDOM() {
    const addProjectContainer = document.querySelector('.add-project');
    addProjectContainer.innerHTML = '';

    initializeDefaultProject();
    
    const addProjectDiv = document.createElement('div');

    const addPlusSVG2 = document.createElement('img');
    addPlusSVG2.src = plus;
    addPlusSVG2.alt = 'Add Project';
    addPlusSVG2.width = 12;
    addPlusSVG2.height = 12;

    const addProjectButton = document.createElement('button');
    addProjectButton.textContent = 'Add Project';
    addProjectButton.className = 'addProjectButton';
    addProjectButton.addEventListener('click', () => {
        renderProjectDialog();
    });

    addProjectDiv.appendChild(addPlusSVG2);
    addProjectDiv.appendChild(addProjectButton);
    addProjectContainer.appendChild(addProjectDiv);
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

function renderProjectDialog() {
    const dialog = document.getElementById('project-dialog');
    dialog.showModal();

    const form = dialog.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const project = form.querySelector('#project').value;
        addProject(project);
        dialog.close();
    });
    
    const cancelBtn = dialog.querySelector('#cancel-btn');
    cancelBtn.addEventListener('click', () => {
        dialog.close();
    });
}

