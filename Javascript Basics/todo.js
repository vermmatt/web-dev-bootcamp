var todos = ["Buy new turtle"];
window.setTimeout(function() {
    // put all of your JS code from the lecture here
    var input = prompt("What would you like to do?");

    while(input !== "quit") {
        if(input === "list") {
            listTodos();
        } else if(input === "new") {
            addTodo();
        } else if(input === "delete") {
            deleteTodo();
        }
        var input = prompt("What would you like to do?");
    }
    console.log("Ok, you quit the app")
  }, 500);

function listTodos() {
    console.log("**********")
    todos.forEach(function(todo, i) {
    console.log(i + ": " + todo);
    })
    console.log("**********");
}

function addTodo() {
    var newTodo = prompt("Enter new todo");
    todos.push(newTodo);
    console.log("Todo added")
}

function deleteTodo() {
    var index = prompt("Enter index of todo to delete");
    todos.splice(index, 1);
    console.log("Deleted todo");
}
