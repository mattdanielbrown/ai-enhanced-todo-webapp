import {Component, signal} from '@angular/core';
import {MatFabButton, MatIconButton} from '@angular/material/button';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatIcon} from '@angular/material/icon';
import {MatList, MatListItem} from '@angular/material/list';
import {NavComponent} from './nav/nav.component';
import {type Todo} from './todo';

@Component({
  selector: 'app-root',
  imports: [NavComponent, MatFabButton, MatIcon, MatIconButton, MatList, MatListItem, MatCheckbox],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected readonly todos = signal<Todo[]>([
    {text: 'Wash clothes', done: true},
    {text: 'Wash my car', done: true},
    {text: 'Pet the dog', done: false},
  ]);

  addTodo() {
    const text = prompt('Enter a new todo.');
    if (text == null) {
      return;
    }

    this.todos.update(todos => [...todos, {text, done: false}]);
  }

  deleteTodo(todo: Todo) {
    this.todos.update(todos => todos.filter(t => t !== todo));
  }

  toggleTodo(todo: Todo) {
    this.todos.update(todos => todos.map(t => t !== todo ? t : {...t, done: !t.done}));
  }
}
