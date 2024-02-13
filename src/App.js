import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo) {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Hello World</h1>

      <div className="container">
        <input
          type="text"
          name="Todo"
          value={todo}
          placeholder="What will you do today?"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button className="btn" onClick={addTodo}>
          Submit
        </button>
      </div>

      {todos?.length > 0 ? (
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <div className="todo" key={index}>
              <li>{todo}</li>

              <button
                className="btn"
                onClick={() => {
                  deleteTodo(todo);
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>No task found</p>
        </div>
      )}
    </div>
  );
}

export default App;
