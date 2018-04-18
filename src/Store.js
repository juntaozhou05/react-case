import { observable, action } from "mobx";
class Store {
  // 被观察者
  @observable
  todos = {
    left: "-100%",
    done: false
  };
  @action
  changeShow = () => {
    this.todos.left = "0";
  };
  changeHide = () => {
    this.todos.left = "-100%";
  };
}

export default Store;
