import { todoList } from "..";
import { Todo } from "./todo.class";

export class TodoList {
  constructor() {
    this.loadLocalStorage();
  }

  newTodo(todo) {
    this.todos.push(todo);
    this.saveStorageTodos();
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== parseInt(id));
    this.saveStorageTodos();
  }

  toggleTodo(id) {
    const todo = this.todos.find((todo) => todo.id === parseInt(id));
    todo.completed = !todo.completed;
    this.saveStorageTodos();
  }

  clearCompleted() {
    this.todos = this.todos.filter((todo) => !todo.completed);
    this.saveStorageTodos();
  }

  saveStorageTodos() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  getStorageTodos() {
    const todoStorage = JSON.parse(localStorage.getItem("todos"));
    return todoStorage;
  }

  loadLocalStorage() {
    this.todos = localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : [];

    //*   recuperacion de metodos de las instancias objetos traidos de localStorage

    // * este como anteriormente hicimos podemos reducirla
    // this.todos = this.todos.map((todoItem) => Todo.fromJson(todoItem));

    //* De esta manera
    this.todos = this.todos.map(Todo.fromJson);
  }
}
