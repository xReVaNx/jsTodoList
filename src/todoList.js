var tasks = [];
var date, time, hour, minute;

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
}

function deleteTask() {}

function modifyTask() {}
