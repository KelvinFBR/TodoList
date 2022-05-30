import "./styles.css";

//* Si en la direccion no expesicifimos el archivo en la caperta buscara el index.js
import { Todo, TodoList } from "./classes";
import { createItem } from "./js/componentes.js";

const modeContainer = document.querySelector(".mode-container");

modeContainer.addEventListener("click", (e) => {
  const target = e.target;

  if (target.matches("#sun")) {
    document.body.classList.remove("dark");
  }

  if (target.matches("#moon")) {
    document.body.classList.add("dark");
  }
});

export const todoList = new TodoList();
