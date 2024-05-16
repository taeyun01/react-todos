import React from "react";
import ToggleButton from "./ToggleButton";

const TodoItem = ({ id, title, content, isDone, deleteTodo, toggleTodo }) => {
  const deleteItem = () => {
    deleteTodo(id);
  };

  return (
    <div style={todoItemStyle}>
      <h3>{title}</h3>
      <p>{content}</p>
      <div style={btnBox}>
        <button style={deleteBtn} onClick={deleteItem}>
          삭제하기
        </button>

        {isDone ? (
          <ToggleButton isDone={isDone} id={id} toggleTodo={toggleTodo} />
        ) : (
          <ToggleButton isDone={isDone} id={id} toggleTodo={toggleTodo} />
        )}
      </div>
    </div>
  );
};

const todoItemStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  border: "1px solid #7C7EFF",
  borderRadius: "8px",
  padding: "20px",
  width: "250px",
  gap: "20px",
};

const btnBox = {
  display: "flex",
  width: "100%",
  textAlign: "center",
  gap: "8px",
};

const deleteBtn = {
  border: "none",
  width: "100%",
  padding: "8px 0",
  cursor: "pointer",
  borderRadius: "5px",
  backgroundColor: "#FF495F",
  color: "white",
};

export default TodoItem;
