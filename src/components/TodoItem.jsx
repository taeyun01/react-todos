import React from "react";

const TodoItem = ({ id, title, content, isDone, deleteTodo, completeTodo }) => {
  const deleteItem = () => {
    deleteTodo(id);
  };

  const completeTodoItem = () => {
    completeTodo(id);
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
          <button style={closeBtn} onClick={completeTodoItem}>
            취소
          </button>
        ) : (
          <button style={completeBtn} onClick={completeTodoItem}>
            완료
          </button>
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

const completeBtn = {
  border: "none",
  width: "100%",
  padding: "8px 0",
  cursor: "pointer",
  borderRadius: "5px",
  backgroundColor: "#7C7EFF",
  color: "white",
};

const closeBtn = {
  border: "none",
  width: "100%",
  padding: "8px 0",
  cursor: "pointer",
  borderRadius: "5px",
  backgroundColor: "#757575",
  color: "white",
};

export default TodoItem;
