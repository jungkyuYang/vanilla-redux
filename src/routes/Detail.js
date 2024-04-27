import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function Detail() {
  const param = useParams();
  const todos = useSelector((state) => state);
  const todo = todos.find((item) => item.id === parseInt(param.id));

  return (
    <div>
      {todo?.text}
      <h2>{todo?.id}</h2>
    </div>
  );
}
