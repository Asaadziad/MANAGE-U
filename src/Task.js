export default class Task {
  constructor(description, userName) {
    this.id = Math.floor(Math.random() * 1001);
    this.description = description;
    this.completed = false;
    this.userName = userName;
  }
  getDesc() {
    return this.description;
  }
}
