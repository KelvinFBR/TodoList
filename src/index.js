import "./styles.css";

//* Si en la direccion no expesicifimos el archivo en la caperta buscara el index.js
import { Todo, TodoList } from "./classes";
import { createItem } from "./js/componentes.js";

export const todoList = new TodoList();

const modeContainer = document.querySelector(".mode-container");

//* cargar todos del local storage
// todoList.todos.forEach((todoItem) => createItem(todoItem));

// * tambien lo podemos hacer de una forma mas minificada no es necesario colocar el parametro y tampoco agragar el arrow function. Esto solo funciona si es un solo parametro.
todoList.todos.forEach(createItem);

//* cargar modo desde localStorage
document.body.classList.add(localStorage.getItem("mode"));

modeContainer.addEventListener("click", (e) => {
  const target = e.target;
  let mode = "";

  if (target.matches("#sun")) {
    document.body.classList.remove("dark");
    mode = "light";
    localStorage.setItem("mode", mode);
  }

  if (target.matches("#moon")) {
    document.body.classList.add("dark");
    mode = "dark";
    localStorage.setItem("mode", mode);
  }
});
