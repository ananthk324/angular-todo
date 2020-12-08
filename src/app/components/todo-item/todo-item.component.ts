import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../models/Todos';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  setClasses(): object {
    let classes = {
      todo: true,
      'is-completed': this.todo.completed,
    };

    return classes;
  }

  onToggle(todo: Todo): any {
    todo.completed = !todo.completed;

    this.todoService
      .toggleCompleted(todo)
      .subscribe((todo) => console.log(todo));
  }

  delete(todo: Todo): any {
    this.deleteTodo.emit(todo);
  }
}
