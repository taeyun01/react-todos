import React from "react";
import TodoWorking from "./TodoWorking";
import TodoDone from "./TodoDone";

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <div style={listWrapStyle}>
      <TodoWorking
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />

      <TodoDone
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
    </div>
  );
};

const listWrapStyle = {
  padding: "20px",
};

export default TodoList;
