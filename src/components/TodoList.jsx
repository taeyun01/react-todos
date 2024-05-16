import React from "react";
import TodoWorkingDone from "./TodoWorkingDone";

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <div style={listWrapStyle}>
      <TodoWorkingDone
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        isDone={false}
      />
      <TodoWorkingDone
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        isDone={true}
      />
    </div>
  );
};

const listWrapStyle = {
  padding: "20px",
};

export default TodoList;
