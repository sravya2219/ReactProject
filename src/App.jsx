import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoInput: "",
      todos: [],
      isEdit: false,
      updateIndex: null
    };
  }

  handleInput = (e) => {
    this.setState({ todoInput: e.target.value });
  };

  handleAddTodo = () => {
    if (!this.state.todoInput.trim()) return;

    const newTodo = {
      text: this.state.todoInput,
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newTodo],
      todoInput: ""
    });
  };

  handleDelete = (index) => {
    const filteredTodos = this.state.todos.filter((_, i) => i !== index);
    this.setState({ todos: filteredTodos });
  };

  handleEdit = (index) => {
    this.setState({
      todoInput: this.state.todos[index].text,
      isEdit: true,
      updateIndex: index
    });
  };

  handleUpdate = () => {
    const updatedTodos = [...this.state.todos];
    updatedTodos[this.state.updateIndex].text = this.state.todoInput;

    this.setState({
      todos: updatedTodos,
      todoInput: "",
      isEdit: false,
      updateIndex: null
    });
  };

  toggleComplete = (index) => {
    const updatedTodos = [...this.state.todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    this.setState({ todos: updatedTodos });
  };

  render() {
    return (
      <div className="main">
        <h2>Todo Application</h2>

        <div className="add">
          <input
            type="text"
            placeholder="Enter todo task"
            value={this.state.todoInput}
            onChange={this.handleInput}
          />

          {this.state.isEdit ? (
            <button onClick={this.handleUpdate}>Update</button>
          ) : (
            <button onClick={this.handleAddTodo}>Add</button>
          )}
        </div>

        <div className="second">
          {this.state.todos.map((todo, index) => (
            <div
              key={index}
              className={todo.completed ? "todo completed" : "todo"}
            >
              <p onClick={() => this.toggleComplete(index)}>
                {todo.text}
              </p>

              <div className="btns">
                <button onClick={() => this.handleEdit(index)}>Edit</button>
                <button onClick={() => this.handleDelete(index)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
