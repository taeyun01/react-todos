import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

const testData = [
  {
    id: 0,
    title: "테스트 데이터1",
    content: "리액트 입문 강의 듣기",
    isDone: false,
  },
  {
    id: 1,
    title: "테스트 데이터2",
    content: "리액트 과제 완료하기",
    isDone: true,
  },
];

function App() {
  const [todos, setTodos] = useState(testData);

  const createTodo = (title, content) => {
    const newTodo = {
      id: new Date().getTime(),
      title: title,
      content: content,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    // 내가 선택한 요소를 뺀 나머지 todo들만 새배열로 반환
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeTodo = (id) => {
    setTodos(
      todos.map(
        (todo) =>
          todo.id === id // todo.id와 내가 선택한 요소의 id가 일치하면
            ? { ...todo, isDone: !todo.isDone } // isDone을 반대로 바꿔줌
            : todo // 아니면 그냥 넘김
      )
    );
  };

  return (
    <div className="App">
      <TodoForm createTodo={createTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
      />
    </div>
  );
}

export default App;
