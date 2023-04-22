import { Component, OnInit } from '@angular/core';
import { TodoDataService } from 'src/app/services/todo-data.service';
import { Todo } from 'src/app/shared/todo.model';
import { Observable } from "rxjs"

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  todoLists: Todo[];

  todoList = new Observable<Todo[]>

  constructor(private todos: TodoDataService) { }

  ngOnInit(): void {
    this.todoLists = this.todos.todoList;
  }

  deleteTodo(id: number) {
    this.todos.deleteTodo(id);
    this.todoLists = this.todos.todoList;
  }

  changeStatus(id: number) {
    this.todos.changeStatus(id)
    this.todoLists = this.todos.todoList;
  }

}
