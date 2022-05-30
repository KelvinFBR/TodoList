import { Todo } from "../classes";
import { todoList } from "../index.js";

const todosContainer = document.querySelector(".todo-items");
const form = document.querySelector(".form-container");
const itemsLength = document.querySelector(".items-length");

// crear todos
export const createItem = (todo) => {
  const div = document.createElement("div");
  const taskItem = `
    <li class="todo-item${todo.completed ? "check" : ""}" data-id="${todo.id}">
        <span class="check-btn">
          <img src="./assets/img/icon/icon-check.svg" alt="check" />
        </span>
        <p class="text">${todo.task}</p>
        <span class="close">
          <img src="./assets/img/icon/icon-cross.svg" alt="cross" />
        </span>
    </li>`;
  div.innerHTML = taskItem;
  todosContainer.appendChild(div.firstElementChild);
  return div.firstElementChild;
};

const getIdTodo = (target) => {
  const todoId =
    target.parentElement.parentElement.dataset.id ||
    target.parentElement.dataset.id;
  return todoId;
};

// agregar todos
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const task = data.get("todo");

  if (task.trim() !== "") {
    const todo = new Todo(task);
    todoList.newTodo(todo);
    createItem(todo);
    form.reset();
  }

  itemsLength.textContent = "";
  itemsLength.textContent = todoList.todos.length;
});

// marcar todo completado
todosContainer.addEventListener("click", (e) => {
  const target = e.target;

  const isBtnCheck =
    target.matches(".check-btn") || target.parentElement.matches(".check-btn");
  const isBtnClose = target.parentElement.matches(".close");
  const isTodoitem =
    target.parentElement.parentElement.matches(".todo-item") ||
    target.parentElement.matches(".todo-item");

  //   itemsLength.textContent = todoList.todos.length;

  // Determinar si es el btnCheck y si es un todoItem
  if (isBtnCheck && isTodoitem) {
    const todoId = getIdTodo(target);
    todoList.toggleTodo(todoId);

    // tachar task completada
    if (target.parentElement.parentElement.matches(".todo-item")) {
      target.parentElement.parentElement.classList.toggle("check");
    }
    target.parentElement.classList.toggle("check");

    // Eliminar todo
  } else if (isBtnClose) {
    const todoId = getIdTodo(target);
    todoList.deleteTodo(todoId);
    const todoItem = target.parentElement.parentElement;
    // Eliminar todo node
    todosContainer.removeChild(todoItem);
  }

  itemsLength.textContent = "";
  itemsLength.textContent = todoList.todos.length;
});
