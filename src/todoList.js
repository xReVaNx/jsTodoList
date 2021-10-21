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
    // Creating <li>
    const createLi = document.createElement("li");
    const idKey = "task" + i.toString();
    createLi.setAttribute("id", idKey);
    elementsList.appendChild(createLi);
    const elementLi = document.getElementById(idKey);

    // Creating <nameDiv>
    const createNameDiv = document.createElement("div");
    createNameDiv.setAttribute("class", "nameDiv");
    createNameDiv.setAttribute("id", "nameDiv" + i.toString());
    nameIdKey = "nameDiv" + i.toString();
    createNameDiv.setAttribute("id", nameIdKey);
    elementLi.appendChild(createNameDiv);

    // Creating <optionDiv>
    const createOptionDiv = document.createElement("div");
    createOptionDiv.setAttribute("class", "optionDiv");
    createOptionDiv.setAttribute("id", "optionDiv" + i.toString());
    optionIdKey = "optionDiv" + i.toString();
    createOptionDiv.setAttribute("id", optionIdKey);
    elementLi.appendChild(createOptionDiv);
    const optionDiv = document.getElementById(optionIdKey);

    // Creating option buttons
    // Creating checkDiv
    const createCheckDiv = document.createElement("div");
    createCheckDiv.setAttribute("class", "checkDiv");
    createCheckDiv.setAttribute("id", "checkDiv" + i);
    createCheckDiv.setAttribute("onclick", "isDone(" + i + ")");
    optionDiv.appendChild(createCheckDiv);
    document.getElementById("checkDiv" + i).innerHTML =
      "<i class='fas fa-check-square'></i>";

    // Creating modifyDiv
    const createModifyDiv = document.createElement("div");
    createModifyDiv.setAttribute("class", "modifyDiv");
    createModifyDiv.setAttribute("id", "modifyDiv" + i);
    createModifyDiv.setAttribute("onclick", "modifyTask(" + i + ")");
    optionDiv.appendChild(createModifyDiv);
    document.getElementById("modifyDiv" + i).innerHTML =
      "<i class='fas fa-pencil-alt'></i>";

    // Creating trashDiv
    const createTrashDiv = document.createElement("div");
    createTrashDiv.setAttribute("class", "trashDiv");
    createTrashDiv.setAttribute("id", "trashDiv" + i);
    createTrashDiv.setAttribute("onclick", "deleteTask(" + i + ")");
    optionDiv.appendChild(createTrashDiv);
    document.getElementById("trashDiv" + i).innerHTML =
      "<i class='fas fa-trash-alt'></i>";

    // Adding options
    const textValue = document.createTextNode(todoArray[i].name);
    document.getElementById(nameIdKey).appendChild(textValue);

    // isDone
    if (todoArray[i].done === true) {
      createNameDiv.classList.add("done");
    }
  }
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

function modifyTask(ind) {
  let todo = localStorage.getItem("todo");
  todoArray = JSON.parse(todo);

  const nameDiv = document.getElementById("nameDiv" + ind);
  const createModifyInput = document.createElement("input");
  createModifyInput.setAttribute("class", "modifyInput");
  createModifyInput.setAttribute("id", "modifyInput" + ind);
  createModifyInput.setAttribute("value", todoArray[ind].name);
  nameDiv.innerHTML = "";
  nameDiv.appendChild(createModifyInput);
  const createSubmitBtn = document.createElement("button");
  createSubmitBtn.setAttribute("id", "modify-Btn" + ind);
  createSubmitBtn.setAttribute("class", "modify-Btn");
  createSubmitBtn.setAttribute("onclick", "submitModify(" + ind + ")");
  nameDiv.appendChild(createSubmitBtn);
  document.getElementById("modify-Btn" + ind).innerHTML =
    "<i class='fas fa-check'></i>";
}

function submitModify(ind) {
  let todo = localStorage.getItem("todo");
  todoArray = JSON.parse(todo);

  let text = document.getElementById("modifyInput" + ind).value;
  todoArray[ind].name = text;
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
