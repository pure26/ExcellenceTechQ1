import React, { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: input, id: Math.random() * 999999 }]);
  };
  const inputTextHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="App">
      <div className="form-container">
        <form>
          <input type="text" value={input} onChange={inputTextHandler} />
          <button type="submit" onClick={submitHandler}>
            Submit
          </button>
        </form>
      </div>

      <div className="todo-container">
        {todos.map((item) => (
          <Todo text={item.text} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
