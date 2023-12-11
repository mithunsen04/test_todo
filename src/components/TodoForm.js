import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/todoActions";

class TodoForm extends React.Component {
  state = {
    text: "",
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.text.trim() !== "") {
      this.props.addTodo(this.state.text);
      this.setState({ text: "" });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="mb-4">
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Add a new todo..."
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="ml-2 bg-blue-500 text-white p-2 rounded"
        >
          Add Todo
        </button>
      </form>
    );
  }
}

export default connect(null, { addTodo })(TodoForm);
