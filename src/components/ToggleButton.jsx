import React from "react";

const ToggleButton = ({ id, isDone, toggleTodo }) => {
  const toggleBtn = {
    border: "none",
    width: "100%",
    padding: "8px 0",
    cursor: "pointer",
    borderRadius: "5px",
    backgroundColor: isDone ? "#757575" : "#7C7EFF",
    color: "white",
  };

  const toggleTodoItem = () => {
    toggleTodo(id);
  };

  return (
    <>
      <button style={toggleBtn} onClick={toggleTodoItem}>
        {isDone ? "취소" : "완료"}
      </button>
    </>
  );
};

export default ToggleButton;
