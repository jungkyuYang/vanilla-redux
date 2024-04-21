import { legacy_createStore as createStore } from "redux";

const ADD = "ADD";
const MINUS = "MINUS";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const reducer = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return (count = count + 1);
    case MINUS:
      return (count = count - 1);
    default:
      return count;
  }
};

const store = createStore(reducer);

const onChange = () => {
  number.innerHTML = store.getState();
};
store.subscribe(onChange);

const handleAdd = () => {
  store.dispatch({ type: ADD });
};

const handleMinus = () => {
  store.dispatch({ type: MINUS });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

/**
 * 1. createStore으로 스토어를 생성
 * 2. reducer를 createStore에 할당
 * 3. reducer는 함수로 설정되어야 하며, initial과 action이 필요함
 * 4. action은 store.dispatch를 사용해서 사용
 * 5. action은 object이며, type으로 표현되어야 함
 * 6. evnet를 발생시키면 동작하는 함수에 dispatch를 이용하여 action type을 작성
 * 7. reducer는 해당 action타입에 맞는 행동을 하도록 설정
 * -> 8. subscribe는 store를 보고 있다가 값이 변화하면 동작함
 * 9. subscribe에 함수를 넣어줘서 해당 동작이 발생하면 동작하도록 설정
 * 10. store의 getState()메소드를 이용하면 변화할 때마다 원하는 State의 값을 가져올 수 있음
 * 11. 원하는 DOM에 할당해주면 됨
 * 12. store는 무슨 값을 저장하는지 reducer는 어떤 것을 변화시키는지 생각해서 변수명을 바꿔주자
 * ex) countStore, countModifier or countReducer
 */

// let count = 0;

// //이게 1번만 발생
// number.innerText = count;

// const updateText = () => {
//   number.innerText = count;
// };

// const handleAdd = () => {
//   count++;
//   updateText();
// };
// const handleMinus = () => {
//   count--;
//   updateText();
// };

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);
