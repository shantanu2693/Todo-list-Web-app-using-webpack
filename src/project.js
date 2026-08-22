class Project {
    constructor(name) {
        this.name = name;
        this.toDoItems = {};
    }

    addToDoItem(toDoItem) {
        this.toDoItems[toDoItem.id] = toDoItem;
    }

    removeToDoItem(toDoItem) {
        delete this.toDoItems[toDoItem.id];
    }
}