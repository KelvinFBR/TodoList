export class TodoList {
  constructor() {
    this.todos = [];
  }

  newTodo(todo) {
    this.todos.push(todo);
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== parseInt(id));
    return;
  }

  toggleTodo(id) {
    const todo = this.todos.find((todo) => todo.id === parseInt(id));
    todo.completed = !todo.completed;
    return;
  }

  clearCompleted() {
    this.todos = this.todos.filter((todo) => !todo.completed);
  }
}
