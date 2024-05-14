import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <div style={listWrapStyle}>
      <h2 style={h2Style}>Working..🔥</h2>
      <div style={todoItemStyle}>
        {todos
          .filter((todo) => todo.isDone === false)
          .map((todo) => (
            <TodoItem
              key={todo.id}
              {...todo}
              deleteTodo={deleteTodo}
              completeTodo={completeTodo}
            />
          ))}
      </div>

      <h2 style={h2Style}>Done..!✔️</h2>
      <div style={todoItemStyle}>
        {todos
          .filter((todo) => todo.isDone !== false)
          .map((todo) => (
            <TodoItem
              key={todo.id}
              {...todo}
              deleteTodo={deleteTodo}
              completeTodo={completeTodo}
            />
          ))}
      </div>
    </div>
  );
};

const todoItemStyle = {
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "16px",
};

const listWrapStyle = {
  padding: "20px",
};

const h2Style = {
  margin: "10px 0px",
};

export default TodoList;
