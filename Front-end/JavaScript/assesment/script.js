var form = document.getElementById("taskForm");
var taskList = document.getElementById("taskList");

var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function showTasks() {
  taskList.innerHTML = "";
  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    var div = document.createElement("div");
    div.className = "task";
    div.innerHTML =
      "<strong>" + task.title + "</strong><br>" +
      task.description + "<br>" +
      "Due: " + task.dueDate + "<br>" +
      "Priority: " + task.priority + "<br>" +
      "Status: " + task.status + "<br>" +
      "<button onclick='editTask(" + i + ")'>Edit</button> " +
      "<button onclick='deleteTask(" + i + ")'>Delete</button>";
    taskList.appendChild(div);
  }
}

form.onsubmit = function(e) {
  e.preventDefault();
  var newTask = {
    title: document.getElementById("title").value,
    description: document.getElementById("description").value,
    dueDate: document.getElementById("dueDate").value,
    priority: document.getElementById("priority").value,
    status: document.getElementById("status").value
  };
  tasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  form.reset();
  showTasks();
};

function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  showTasks();
}

function editTask(index) {
  var task = tasks[index];
  document.getElementById("title").value = task.title;
  document.getElementById("description").value = task.description;
  document.getElementById("dueDate").value = task.dueDate;
  document.getElementById("priority").value = task.priority;
  document.getElementById("status").value = task.status;
  tasks.splice(index, 1);
}

showTasks();