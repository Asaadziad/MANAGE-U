export default class TaskManager {
  constructor() {
    this.tasks = [];
  }
  addTask(task) {
    let currentTasksArr = JSON.parse(localStorage.getItem("tasks"));
    if (!currentTasksArr) {
      currentTasksArr = [];
    }
    currentTasksArr.push(task);
    localStorage.setItem("tasks", JSON.stringify(currentTasksArr));
    this.tasks = currentTasksArr;
  }
  deleteTask(taskId) {
    let currentTasksArr = JSON.parse(localStorage.getItem("tasks"));
    if (!currentTasksArr) {
      currentTasksArr = [];
    }
    currentTasksArr = currentTasksArr.filter((item) => {
      return item.id != taskId;
    });
    localStorage.setItem("tasks", JSON.stringify(currentTasksArr));
    this.tasks = currentTasksArr;
  }
  updateTaskDescription(taskId, desc) {
    let currentTasksArr = JSON.parse(localStorage.getItem("tasks"));
    if (!currentTasksArr) {
      currentTasksArr = [];
    }
    currentTasksArr = currentTasksArr.map((item) => {
      if (item.id == taskId) {
        item.description = desc;
        return item;
      } else {
        return item;
      }
    });
    localStorage.setItem("tasks", JSON.stringify(currentTasksArr));
    this.tasks = currentTasksArr;
  }
  completeTask(taskId) {
    let currentTasksArr = JSON.parse(localStorage.getItem("tasks"));
    if (!currentTasksArr) {
      currentTasksArr = [];
    }
    currentTasksArr = currentTasksArr.map((item) => {
      if (item.id == taskId) {
        item.completed = true;
        return item;
      } else {
        return item;
      }
    });
    localStorage.setItem("tasks", JSON.stringify(currentTasksArr));
    this.tasks = currentTasksArr;
  }
}
