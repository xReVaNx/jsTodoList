// Elements
const jsForm = document.querySelector("#jsForm");
const text = document.querySelector("#newTask");
const submitBtn = document.querySelector("#submit-btn");
const elementsList = document.querySelector("#elementsList");
let todoArray = [];

// Events
jsForm.addEventListener("submit", (e) => {
  // Turning off default form functionality
  e.preventDefault();
});

window.addEventListener("DOMContentLoaded", displayTasks);

submitBtn.addEventListener("click", addTask);

// Function that display tasks
function displayTasks() {
  elementsList.innerHTML = "";
  let todo = localStorage.getItem("todo");
  if (todo === null) {
    todoArray = [];
  } else {
    todoArray = JSON.parse(todo);
  }

  for (let i = 0; i < todoArray.length; i++) {
    const createLi = document.createElement("li");
    const idKey = "task" + i.toString();

    const nameDiv = document.createElement("div");
    nameDiv.setAttribute("class", "nameDiv");
    nameDiv.setAttribute("id", "nameDiv" + i.toString());
    nameDiv.setAttribute("onclick", "isDone(" + i + ")");
    const optionDiv = document.createElement("div");
    optionDiv.setAttribute("class", "optionDiv");
    optionDiv.setAttribute("id", "optionDiv" + i.toString());
    optionDiv.setAttribute("onclick", "deleteTask(" + i + ")");

    createLi.setAttribute("id", idKey);
    elementsList.appendChild(createLi);

    const textValue = document.createTextNode(todoArray[i].name);
    const elementLi = document.getElementById(idKey);

    nameIdKey = "nameDiv" + i.toString();
    optionIdKey = "optionDiv" + i.toString();

    nameDiv.setAttribute("id", nameIdKey);

    // isDone
    if (todoArray[i].done === true) {
      nameDiv.classList.add("done");
    }

    optionDiv.setAttribute("id", optionIdKey);

    elementLi.appendChild(nameDiv);
    elementLi.appendChild(optionDiv);

    document.getElementById(nameIdKey).appendChild(textValue);

    document.getElementById("optionDiv" + i).innerHTML =
      "<i class='fas fa-trash-alt'></i>";
  }
  console.log(todoArray);
}

// Function that add tasks to the list
function addTask() {
  let todo = localStorage.getItem("todo");
  if (todo === null) {
    todoArray = [];
  } else {
    todoArray = JSON.parse(todo);
  }
  todoArray.push({ name: text.value, done: false });
  text.value = "";
  localStorage.setItem("todo", JSON.stringify(todoArray));
  displayTasks();
}

// Function that delete task from the list
function deleteTask(ind) {
  let todo = localStorage.getItem("todo");
  todoArray = JSON.parse(todo);
  todoArray.splice(ind, 1);
  localStorage.setItem("todo", JSON.stringify(todoArray));
  displayTasks();
}

// Function that check task for done
function isDone(ind) {
  let todo = localStorage.getItem("todo");
  if (todo === null) {
    todoArray = [];
  } else {
    todoArray = JSON.parse(todo);
  }
  todoArray[ind].done = !todoArray[ind].done;
  localStorage.setItem("todo", JSON.stringify(todoArray));
  displayTasks();
}
