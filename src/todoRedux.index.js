import { legacy_createStore as createStore } from "redux";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const addTodo = (text) => {
  return { type: ADD_TODO, text };
};

const deleteTodo = (id) => {
  return { type: DELETE_TODO, id };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodoObject = { text: action.text, id: Date.now() };
      return [newTodoObject, ...state];
    case DELETE_TODO:
      console.log(action);
      return state.filter((todo) => {
        return todo.id !== action.id;
      });
    default:
      return state;
  }
};

const store = createStore(reducer);

const dispatchAddTodo = (text) => {
  return store.dispatch(addTodo(text));
};

const dispatchDeleteTodo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  return store.dispatch(deleteTodo(id));
};

const onSubmit = (e) => {
  e.preventDefault();
  const todo = input.value;
  input.value = "";
  dispatchAddTodo(todo);
};

const onChange = () => {
  const todos = store.getState();
  ul.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "삭제";
    btn.addEventListener("click", dispatchDeleteTodo);
    li.id = todo.id;
    li.innerText = todo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};
store.subscribe(onChange);

form.addEventListener("submit", onSubmit);
