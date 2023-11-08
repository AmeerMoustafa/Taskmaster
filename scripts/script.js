tasks = [];

// Mapping our data to the DOM

function displayList() {
  const task_list = document.getElementById("task-list");
  task_list.innerHTML = "";
  tasks.map((task) => {
    // Building our outer task item
    let task_item = document.createElement("li");
    task_item.classList.add("flex", "task");
    task_item.setAttribute("data-index", `${task.id}`);

    //Building our checkbox
    const task_checkbox = document.createElement("input");
    task_checkbox.setAttribute("type", "checkbox");
    task_checkbox.classList.add("task-checkbox");

    //Building our task text

    const task_text = document.createElement("span");
    task_text.classList.add("task-name");
    task_text.innerHTML = `${task.task}`;

    //Building our delete mechanism
    const task_delete = document.createElement("span");
    task_delete.innerText = "x";
    task_delete.classList.add("task-delete");

    // combining our elements
    task_item.append(task_checkbox, task_text, task_delete);

    task_list.appendChild(task_item);
  });
}

// Handling our data input

function getData() {
  const input_form = document.forms["input-form"];

  input_form.addEventListener("submit", (e) => {
    e.preventDefault();

    let task_input = document.getElementById("task-input");
    let task_priority = document.getElementById("task-priority");
    const new_task = {
      id: tasks.length,
      task: task_input.value,
      priority: Number(task_priority.value),
      completed: false,
    };

    tasks.push(new_task);

    task_input.value = "";
    task_priority.value = "0";

    displayList();
  });
}

getData();
