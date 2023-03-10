function loadTodos() {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((data) => displaytodos(data));
}

function displaytodos(todos) {
  const todoContainer = document.getElementById('todo-container');
  for (const todo of todos) {
    // create the child element
    const todoDiv = document.createElement('div');
    todoDiv.innerHTML = `
    <h3>title: ${todo.title}</h3>
    <p>User: ${todo.userId}</p>
    
    `;
    todoContainer.appendChild(todoDiv);
  }
}
loadTodos();

{
  /* <p>Is completed: ${todo.completed === true ? 'complete' : 'not complete'}</p>; */
}
