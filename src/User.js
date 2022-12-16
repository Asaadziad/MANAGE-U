export default class User {
  constructor(name, password) {
    this.id = Math.floor(Math.random() * 1000);
    this.name = name;
    this.password = password;
  }
  get(propName) {
    return this[propName];
  }
  set(propName, value) {
    this[propName] = value;
  }
}
