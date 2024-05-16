import React, { useState } from "react";

const TodoForm = ({ createTodo }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (title === "" || content === "") {
      return alert("제목과 내용을 입력해주세요.");
    }

    createTodo(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <div style={headerStyle}>
      <form style={formStyle} onSubmit={onSubmit}>
        <div>
          제목 :{" "}
          <input
            style={inputStyle}
            type="text"
            value={title}
            onChange={onChangeTitle}
          />
          내용 :{" "}
          <input
            style={inputStyle}
            type="text"
            value={content}
            onChange={onChangeContent}
          />
        </div>
        <div>
          <button style={buttonStyle}>추가</button>
        </div>
      </form>
    </div>
  );
};

const headerStyle = {
  padding: "20px 0px",
  borderBottom: "1px solid rgb(170, 170, 170)",
};

const formStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
};

const inputStyle = {
  padding: "6px 3px",
  margin: "0 10px",
  borderRadius: "5px",
  border: "1px solid black",
};

const buttonStyle = {
  padding: "10px 50px",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "#7068FF",
  color: "white",
  cursor: "pointer",
};

export default TodoForm;
