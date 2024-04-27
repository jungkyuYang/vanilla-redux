import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

export default function Todo(props) {
  const dispatch = useDispatch();

  function onClick() {
    dispatch(actionCreators.deleteTodo(props.id));
  }

  return (
    <li>
      <Link to={`/${props.id}`}>
        {props.text} <button onClick={onClick}>삭제</button>
      </Link>
    </li>
  );
}
