functio addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput == null) {
        alert("Please enter a task");
        return;
    }
    let li = document.getElementById("li");

    li.textContent = taskInput.value;

    taskList.value = null;

    li.onclick = function () {
        this.parentNode.removeChild(this);
    }
}

function handleEnterKey(event) {
    if (event === "Enter") {
        event.preventDefault();
        addTask();
    }
}
