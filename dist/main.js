import Task from "../src/Task.js";
import {
  checkConfirm,
  displayHeader,
  displayLogin,
  displayRegister,
  displayTasks,
  editTemplate,
  sendAlert,
} from "../src/DisplayController.js";
import TaskManager from "../src/TaskManager.js";
import User from "../src/User.js";
import UserManager from "../src/UsersManager.js";

displayHeader();
let userManager = new UserManager();
let taskManager = new TaskManager();
let logged = localStorage.getItem("isLogged") == "true" ? true : false;

if (!logged) {
  displayRegister();
} else {
  displayLogin();
}

if (logged) {
  displayTasks();
}

window.Register = function Register() {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (userManager.checkUserExists(username)) {
    sendAlert("Username already exists!", "danger");
    return;
  }
  if (username == "" || password == "") {
    sendAlert("Please enter missing info", "danger");
    return;
  }
  userManager.addUser(new User(username, password));
  displayLogin();
  sendAlert("Registered successfuly!", "success");
};

window.Login = function Login() {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (userManager.checkUser(username, password)) {
    localStorage.setItem("isLogged", "true");
    localStorage.setItem(
      "loggedUser",
      document.getElementById("username").value
    );
    displayTasks();
    sendAlert("Welcome back!", "primary");
  } else {
    sendAlert("Wrong Information!", "danger");
  }
};

window.addTask = function addTask() {
  const desc = document.getElementById("task");
  if (!desc) return;
  if (desc.value == "") {
    sendAlert("Add task description", "danger");
  } else {
    taskManager.addTask(
      new Task(desc.value, localStorage.getItem("loggedUser"))
    );
  }

  displayTasks();
  console.log(taskManager.tasks);
};
window.showLogin = function showLogin() {
  displayLogin();
};

window.showRegister = function showRegister() {
  displayRegister();
};

window.deleteTask = function deleteTask(taskId) {
  checkConfirm();
  const deleteBtn = document.getElementById("deleteTaskBtn");
  if (!deleteBtn) return;
  deleteBtn.addEventListener("click", () => {
    taskManager.deleteTask(taskId);
    console.log(taskManager.tasks);
    displayTasks();
  });
};

window.completeTask = function completeTask(taskId) {
  taskManager.completeTask(taskId);
  displayTasks();
};

window.editTask = function editTask(taskId) {
  editTemplate();
  const saveTaskBtn = document.getElementById("saveTaskBtn");
  if (!saveTaskBtn) return;
  saveTaskBtn.addEventListener("click", () => {
    taskManager.updateTaskDescription(
      taskId,
      document.getElementById("taskNewDescription").value
    );
    displayTasks();
  });
};

window.Logout = function Logout() {
  localStorage.setItem("loggedUser", null);
  localStorage.setItem("isLogged", false);
  displayLogin();
};

window.confirm = function confirm() {
  checkConfirm();
};
