import { Component } from '@angular/core';
import { TodoDataService } from 'src/app/services/todo-data.service';
import { Todo } from 'src/app/shared/todo.model';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  inputData: string;
  constructor(private todoData: TodoDataService){};

  getInputValue() {
    this.todoData.getUserData({
      content : this.inputData,
      completed: false
    });
    this.inputData = "";

  }

}
