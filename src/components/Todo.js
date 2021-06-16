import React from "react";
import "../App.css";

const Todo = ({ text }) => {
  return (
    <div className="todo">
      <h1>{text}</h1>
    </div>
  );
};

export default Todo;
