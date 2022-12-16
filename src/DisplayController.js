export function displayHeader() {
  const header = document.getElementById("header");
  if (!header) return;
  header.innerHTML = `<h1>Manage-U<i class="fas fa-check-double"></i></h1>`;
}

export function displayRegister() {
  const content = document.getElementById("content");
  const alerts = document.getElementById("alerts");
  if (!content || !alerts) return;
  alerts.innerHTML = "";
  content.innerHTML = "";
  content.innerHTML += `<div class="d-flex justify-content-center">
  
  <form style="min-width:25vw;max-width:30vw;">
  <h1 style="text-align:center;">Register</h1>
  <div class="form-group mb-3">
    <label for="username">Username</label>
    <input type="email" class="form-control" id="username" placeholder="Username">
  </div>
  <div class="form-group mb-3">
    <label for="password">Password</label>
    <input type="password" class="form-control" id="password" placeholder="Password">
  </div>
  <p>Already Registered? <button onclick="showLogin()">Login</button></p>
  <button type="submit" class="btn btn-primary w-100 mt-4" onclick="Register()">Submit</button>
</form>
</div>`;
}

export function displayLogin() {
  const content = document.getElementById("content");
  const alerts = document.getElementById("alerts");
  if (!content || !alerts) return;
  alerts.innerHTML = "";
  content.innerHTML = "";
  content.innerHTML += `<div class="d-flex justify-content-center">
  
  <form style="min-width:25vw;max-width:30vw;">
  <h1 style="text-align:center;">Login</h1>
  <div class="form-group mb-3">
    <label for="username">Username</label>
    <input type="email" class="form-control" id="username" placeholder="Username">
  </div>
  <div class="form-group mb-3">
    <label for="password">Password</label>
    <input type="password" class="form-control" id="password" placeholder="Password">
  </div>
  <p>Dont have an account? <button onclick="showRegister()">Register</button></p>
  <button type="submit" class="btn btn-primary w-100 mt-4" onclick="Login()">Submit</button>
</form>
</div>`;
}

export function displayTasks() {
  const content = document.getElementById("content");
  if (!content) return;
  const userName = localStorage.getItem("loggedUser");
  content.innerHTML = "";
  content.innerHTML += `<div class="d-flex justify-content-between"><i class="fas fa-user fa-xl"> ${userName}</i><button class="btn btn-danger" onclick="Logout()">Logout</button></div>`;
  content.innerHTML += `Welcome back ${userName}, `;
  content.innerHTML += `<div class="d-flex justify-content-center"><input type="text" name="task" placeholder="New Task" id="task" style="padding:10px;margin:5px;width:50%;border-radius:5px;"></input><button class="btn btn-warning" style="min-width:50px;" onclick="addTask()"><i class="fas fa-plus"></i></button></div>`;
  content.innerHTML += `<h2 class="mt-5 text-success" style="text-align:center;">Active</h2><div class="d-flex justify-content-center mt-2"><ul class="list-group" id="active"></ul></div>`;
  content.innerHTML += `<h2 class="mt-5 text-danger" style="text-align:center;">Completed</h2><div class="d-flex justify-content-center mb-5 text-decoration-line-through"><ul class="list-group" id="completed"></ul></div>`;
  let currentTasksArr = JSON.parse(localStorage.getItem("tasks"));
  if (!currentTasksArr) {
    currentTasksArr = [];
  }
  const completed = currentTasksArr.filter((item) => {
    return item.completed && item.userName == userName;
  });
  const active = currentTasksArr.filter((item) => {
    return !item.completed && item.userName == userName;
  });
  const activeTasks = document.getElementById("active");
  const completedTasks = document.getElementById("completed");
  completed.forEach((element) => {
    completedTasks.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center" style="min-width:400px;">${element.description}<span><button class="btn btn-success disabled"><i class="fas fa-check-double"></i></button><button class="btn btn-primary ms-1 disabled"><i class="fas fa-pen"></i></button><button class="btn btn-danger ms-1 disabled" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fas fa-trash"></i></button></span></li>`;
  });
  active.forEach((element) => {
    activeTasks.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center" style="min-width:400px;"><span>${element.description}</span><span><button class="btn btn-success" onclick="completeTask(${element.id})"><i class="fas fa-check"></i></button><button class="btn btn-primary ms-1" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="editTask(${element.id})"><i class="fas fa-pen"></i></button><button class="btn btn-danger ms-1" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="deleteTask(${element.id})"><i class="fas fa-trash"></i></button></span></li>`;
  });
}

export function sendAlert(text, type) {
  const alert = document.getElementById("alerts");
  if (!alert) return;
  alert.innerHTML = "";
  alert.innerHTML += `<div class="alert alert-${type} alertAnimated" style="min-width:400px;text-align:center;" role="alert">
  ${text}
</div>`;
  setTimeout(() => {
    alert.innerHTML = "";
  }, 3000);
}

export function checkConfirm() {
  const modal = document.getElementById("mBody");
  const header = document.getElementById("exampleModalLabel");
  const footer = document.getElementById("mFooter");
  modal.innerHTML = "";
  modal.innerHTML += "<p>Are you sure you want to delete this task?</p>";
  header.innerHTML = "";
  header.innerHTML += "Confirm delete";
  footer.innerHTML = "";
  footer.innerHTML += `<button class="btn btn-danger" id="deleteTaskBtn" data-bs-dismiss="modal">Delete</button><button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>`;
}

export function editTemplate() {
  const modal = document.getElementById("mBody");
  const header = document.getElementById("exampleModalLabel");
  const footer = document.getElementById("mFooter");
  modal.innerHTML = "";
  modal.innerHTML +=
    "<p>Enter new task description:</p><input type='text' id='taskNewDescription'>";
  header.innerHTML = "";
  header.innerHTML += "Edit task";
  footer.innerHTML = "";
  footer.innerHTML += `<button class="btn btn-primary" id="saveTaskBtn" data-bs-dismiss="modal">Save changes</button><button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>`;
}
