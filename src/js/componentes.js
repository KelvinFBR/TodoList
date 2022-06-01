import { Todo } from "../classes";
import { todoList } from "../index.js";

const todosContainer = document.querySelector(".todo-items");
const form = document.querySelector(".form-container");
const itemsLength = document.querySelector(".items-length");
const btnClearCompleted = document.querySelector(".clear-completed");
const filtersContainer = document.querySelector(".filter-todos");
const filterItems = document.querySelectorAll(".filter-todos li");

// crear todos
export const createItem = (todo) => {
  const div = document.createElement("div");
  const taskItem = `
    <li class="todo-item ${todo.completed ? "check" : ""}" data-id="${todo.id}">
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

// optener id todo
const getIdTodo = (target) => {
  const todoId =
    target.parentElement.parentElement.dataset.id ||
    target.parentElement.dataset.id;
  return todoId;
};

// contador todos
const countTodos = () => {
  itemsLength.textContent = "";
  itemsLength.textContent = todoList.todos.length;
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
  countTodos();
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

  countTodos();
});

btnClearCompleted.addEventListener("click", () => {
  todoList.clearCompleted();

  // Este loops recorre los elementos del to
  for (let i = todosContainer.children.length - 1; i >= 0; i--) {
    const todoElement = todosContainer.children[i];

    if (todoElement.classList.contains("check")) {
      //   todosContainer.removeChild(todoElement);
      todoElement.remove();
    }
  }

  countTodos();
});

filtersContainer.addEventListener("click", (e) => {
  const todosElements = document.querySelectorAll(".todo-items li");
  const target = e.target;
  const filterType = e.target.textContent;

  const todosItems = todosContainer.children;

  filterItems.forEach((element) => {
    element.classList.remove("selected");
  });
  todosElements.forEach((element) => {
    element.classList.remove("hidden");
  });

  for (let i = todosContainer.children.length - 1; i >= 0; i--) {
    const todoElement = todosContainer.children[i];

    switch (filterType) {
      case "Active":
        target.classList.add("selected");
        if (todoElement.classList.contains("check")) {
          todoElement.classList.add("hidden");
        }
        break;

      case "Completed":
        target.classList.add("selected");
        if (!todoElement.classList.contains("check")) {
          todoElement.classList.add("hidden");
        }
        break;

      default:
        target.classList.add("selected");
        todoElement.classList.remove("hidden");
        break;
    }
  }
});
