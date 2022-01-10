// import { render } from "@testing-library/react";
import { Component } from 'react';
import initialTodos from './todos.json';
import TodoList from './TodoList';

class Appp extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    const constTotal = todos.length;
    const completedTodo = todos.reduce(
      (acc, item) => (item.completed ? acc + 1 : acc),
      0,
    );
    return (
      <>
        <div>
          <p>total {constTotal}</p>
          <p>completed {completedTodo}</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}
export default Appp;
