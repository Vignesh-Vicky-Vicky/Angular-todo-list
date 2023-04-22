import { Injectable, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService implements OnInit {

  todoList: Todo[] = [];
  constructor() { }

  ngOnInit(): void {

  }

  getUserData(todo: Todo) {
    this.todoList.push(todo);
  }

  deleteTodo(id: number) {
    this.todoList = this.todoList.filter((todo, index) => {
      if (id !== index) {
        return todo;
      }
    });
  }

  changeStatus(id: number) {
    this.todoList.map((todo, index) => {
      if (id === index) {
        todo.completed = !todo.completed;
      }
    });
  }

}
