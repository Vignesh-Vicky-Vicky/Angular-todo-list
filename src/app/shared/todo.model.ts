export class Todo {
    content: string = "";
    completed: boolean = false;

    constructor (content: string, status: boolean) {
        this.content = content;
        this.completed = status;
    }
}