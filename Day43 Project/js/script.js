let todos =  JSON.parse(localStorage.getItem("todos")) || [];

function saveTodos() {
    localStorage.setItem(
        "todos",
        JSON.stringify(todos)
    );
}


function renderTodos() {

    const todosContainer = document.getElementById("list");

    todosContainer.innerHTML = "";

    todos.forEach((todos, index) => {

        const ul = document.createElement("ul");

        ul.classList.add("ul");

        ul.innerHTML = `
        <p>${todos}</p>
        <button
        class="delete"
        onclick="deleteTask(${index})">
        Delete
        </button>
        `;
       
        todosContainer.appendChild(ul);
    });
}

function addTodos() {
    
    const taskInput = document.getElementById("taskInput");

    if (taskInput.value.trim() === "") {
        alert("Please enter a Task!!!.");
        return;
    }

    todos.push(taskInput.value);

    saveTodos();
    renderTodos();

    taskInput.value = "";
}

function deleteTask(index) {

    todos.splice(index, 1);

    saveTodos();
    renderTodos();

}
renderTodos();