var tasks = [];
var date, time, hour, minute;

function displayTasks() {
  const todoElements = document.querySelector("#todoElements");

  const ulExists = document.querySelector("ul");
  const createUl = document.createElement("ul");
  createUl.setAttribute("id", "elementsList");

  if (!ulExists) {
    todoElements.appendChild(createUl);
  }

  tasks.map(createTaskList(tasks.name, tasks.time));
}

// Naprawić funkcjonalność
function createTaskList(arrayName, arrayTime) {
  console.log(arrayName);
  const idKey = arrayName;
  const elementsList = document.querySelector("#elementsList");
  const createLi = document.createElement("li");
  createLi.setAttribute("id", idKey);
  const createNameContent = document.createTextNode(arrayName);
  const createTimeContent = document.createTextNode(arrayTime);

  elementsList.appendChild(createLi);
  document.getElementById(arrayName).appendChild(createNameContent);
  document.getElementById(arrayName).appendChild(createTimeContent);
}

function addTask() {
  const inputValue = document.querySelector("#newTask");
  date = new Date();
  hour = date.getHours().toString();
  minute = date.getMinutes().toString();

  if (hour < 10) {
    hour = "0" + hour;
  }

  if (minute < 10) {
    minute = "0" + minute;
  }

  time = hour + ":" + minute;

  tasks.push({ name: inputValue.value, date: time });
  inputValue.value = "";

  //Test
  console.log(tasks);

  displayTasks();
}

function deleteTask() {}

function modifyTask() {}
