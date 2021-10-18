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

  document.getElementById("elementsList").innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    const elementsList = document.querySelector("#elementsList");
    const createLi = document.createElement("li");

    const idKey = tasks[i].name.toString() + i.toString();

    createLi.setAttribute("id", idKey);
    elementsList.appendChild(createLi);

    const elementLi = document.getElementById(idKey);

    const nameIdKey = "nameDiv" + i.toString();

    const dateIdKey = "dateDiv" + i.toString();

    let nameDiv = document.createElement("div");
    nameDiv.setAttribute("id", nameIdKey);
    nameDiv.setAttribute("class", "nameDiv");
    let dateDiv = document.createElement("div");
    dateDiv.setAttribute("id", dateIdKey);
    dateDiv.setAttribute("class", "dateDiv");

    const elementContentName = document.createTextNode(tasks[i].name);
    const elementContentDate = document.createTextNode(tasks[i].date);
    elementLi.appendChild(nameDiv);
    elementLi.appendChild(dateDiv);

    nameDiv = document.getElementById(nameIdKey);
    dateDiv = document.getElementById(dateIdKey);

    nameDiv.appendChild(elementContentName);
    dateDiv.appendChild(elementContentDate);
  }
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

  displayTasks();
}

function deleteTask() {
  displayTasks();
}

function modifyTask() {}

function isDone() {
  console.log("wykonano");
}
