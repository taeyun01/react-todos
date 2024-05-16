import React from "react";
import TodoItem from "./TodoItem";

const TodoDone = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <>
      <h2 style={h2Style}>{todos.isDone ? "Working..🔥" : "Done..!✔️"}</h2>
      <div style={todoItemStyle}>
        {todos
          .filter((todo) => todo.isDone !== false)
          .map((todo) => (
            <TodoItem
              key={todo.id}
              {...todo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
            />
          ))}
      </div>
    </>
  );
};

const todoItemStyle = {
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "16px",
};

const h2Style = {
  margin: "10px 0px",
};
export default TodoDone;
