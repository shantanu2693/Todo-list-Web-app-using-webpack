class ToDoItem {
    constructor(title, description, dueDate, priority, checkList) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checkList = checkList;
        this.id = crypto.randomUUID();
    }

    addCheckList(checkListItem) {
        this.checkList.push(checkListItem);
    }

    removeCheckList(checkListItem) {
        this.checkList.splice(this.checkList.indexOf(checkListItem), 1);
    }

    updateTitle(title) {
        this.title = title;
    }

    updateDescription(description) {
        this.description = description;
    }

    updateDueDate(dueDate) {
        this.dueDate = dueDate;
    }

    updatePriority(priority) {
        this.priority = priority;
    }
}