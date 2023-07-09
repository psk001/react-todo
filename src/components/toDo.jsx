import React from "react";
import "../styles/todo.css";

const ToDo = ({ key, handleDelete }) => {
  return (
    <div className="todo">
      <input type="checkBox" />
      <p className="task">Nothing</p>
      <p className="time">9:30 PM</p>
      <button className="remove" onClick={handleDelete}>
        Remove
      </button>
    </div>
  );
};

export default ToDo;
