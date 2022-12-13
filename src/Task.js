export default class Task {
  constructor(description) {
    this.id = Math.floor(Math.random() * 1001);
    this.description = description;
    this.completed = false;
  }
  getDesc() {
    return this.description;
  }
}
