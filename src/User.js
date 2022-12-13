export default class User {
  constructor(name, password) {
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
