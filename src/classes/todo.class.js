export class Todo {
  //* tenemos que tener en cuenta que cuando agregamos una instancia de un objeto al localStorage esa instancia pierde todos los metodos que le correspondian. esto solo pasa cuando agragmos una instancia de un objeto a el storage, lo unico que no se pirede son las propiedades.

  //* Pero hay una forma de solucionar este problema en la clase donde creamos los objetos de las clase para  crear una intancia del todo a partir de los valores de esa propiedades que guardamos en el localStorage.

  static fromJson({ task, id, completed, created }) {
    const tempTodo = new Todo(task);
    tempTodo.id = id;
    tempTodo.completed = completed;
    tempTodo.created = created;

    return tempTodo;
  }

  constructor(task) {
    this.task = task;
    this.id = new Date().getTime();
    this.completed = false;
    this.created = new Date();
  }

  //* Esta es una prueba para la implementacion de metodos de una instancia de un objeto enviado a localStorage y creando con el valos tomado de localStorage
  //   imprimir() {
  //     console.log(`task: ${this.task} - id: ${this.id}`);
  //   }
}
