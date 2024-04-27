/** store 생성법
 * 1. store를 만들고 createStore를 생성해준다.
 * 2. reducer를 정의한다.
 * 3. reducer에는 타입과 해당 타입이 실행될 때 필요한 state 변경사항을 정의한다.
 * 4. 필요한 파라미터와 type을 따로 선언해준다.
 * *ex) addTodo, deleteTodo
 * -> 6. index.js에 Provider 감싸 스토어를 할당해준다.
 * 7. 연결이 필요하기 때문에 useSelector hook을 사용하여 원하는 페이지 컴포넌트에 state 값을 불러와준다.
 */

import { legacy_createStore as createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addTodo = (text) => {
  return {
    type: ADD,
    text,
  };
};

const deleteTodo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addTodo,
  deleteTodo,
};

export default store;
