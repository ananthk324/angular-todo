import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todos';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: Todo): any {
    this.todos = this.todos.filter((item) => item.id !== todo.id);
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: any): any {
    this.todoService.addTodo(todo).subscribe((res) => this.todos.unshift(res));
  }
}
