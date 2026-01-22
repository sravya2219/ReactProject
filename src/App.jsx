
import React, { useState } from "react";
import "./App.css";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddTodo = () => {
    if (todoInput.trim() === "") return;

    setTodos([...todos, todoInput]);
    setTodoInput("");
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleEdit = (index) => {
    setTodoInput(todos[index]);
    setIsEdit(true);
    setEditIndex(index);
  };

  const handleUpdate = () => {
    const updatedTodos = [...todos];
    updatedTodos[editIndex] = todoInput;

    setTodos(updatedTodos);
    setTodoInput("");
    setIsEdit(false);
    setEditIndex(null);
  };

  return (
    <div className="main">
      <h1>Todo Application</h1>

      <input
        type="text"
        placeholder="Enter todo"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />

      {isEdit ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={handleAddTodo}>Add</button>
      )}

      {todos.map((todo, index) => (
        <div key={index}>
          <p>{todo}</p>
          <button onClick={() => handleEdit(index)}>Edit</button>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
