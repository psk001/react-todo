import React, { useState } from "react";
import ToDo from "./toDo";

import "../styles/board.css";

const Board = () => {
  const [toDoList, setToDoList] = useState([]);

  const deleteTask = (key) => {
    console.log('key', key)
    const updatedToDoList = toDoList.filter((idx) => idx != key);
    setToDoList(updatedToDoList);
  };

  const handleClick = () => {
    const newToDo = <ToDo key={toDoList.length} handleDelete={deleteTask} />;
    setToDoList([...toDoList, newToDo]);
  };
  return (
    <div className="board">
      <div className="head">
        <p className="heading">Daily Display</p>
        <button className="add-task" onClick={handleClick}>
          Add Task
        </button>
      </div>
      <div className="body">{toDoList.map((toDo) => toDo)}</div>
    </div>
  );
};

export default Board;
