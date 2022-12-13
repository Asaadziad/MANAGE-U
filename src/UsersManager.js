import User from "./User.js";
export default class UserManager {
  constructor() {
    this.users = [];
  }
  addUser(user) {
    let currentUsersArr = JSON.parse(localStorage.getItem("users"));
    if (!currentUsersArr) {
      currentUsersArr = [];
    }
    currentUsersArr.push(user);
    localStorage.setItem("users", JSON.stringify(currentUsersArr));
    this.users = currentUsersArr;
  }
  deleteUser(name) {
    let currentUsersArr = JSON.parse(localStorage.getItem("users"));
    if (!currentUsersArr) {
      currentUsersArr = [];
    }
    currentUsersArr = currentUsersArr.filter((item) => {
      return item.get("name") != name;
    });
    localStorage.setItem("users", JSON.stringify(currentUsersArr));
    this.users = currentUsersArr;
  }
  checkUser(name, password) {
    let currentUsersArr = JSON.parse(localStorage.getItem("users"));
    if (!currentUsersArr) {
      currentUsersArr = [];
    }
    console.log(currentUsersArr);
    for (let i = 0; i < currentUsersArr.length; i++) {
      if (
        currentUsersArr[i].name == name &&
        currentUsersArr[i].password == password
      ) {
        return true;
      }
    }
    return false;
  }
}
