import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import InputTodo from './InputTodos';
import TodosList from './TodoList';

export class TodoContainer extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: uuidv4(),
          title: 'Take my breakfast',
          completed: true,
        },
        {
          id: uuidv4(),
          title: 'Start building react to do list',
          completed: false,
        },
        {
          id: uuidv4(),
          title: 'Take a break',
          completed: false,
        },
      ],
    };
  }

  // Check Box
  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  // Delete button
  delTodo = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: [
        ...todos.filter((todo) => todo.id !== id),
      ],
    });
  };

  // Add item
  addTodoItem = (title) => {
    const { todos } = this.state;
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState({
      todos: [...todos, newTodo],
    });
  };

  setUpdate = (updatedTitle, id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map((todo) => {
        const t = todo;
        if (t.id === id) {
          t.title = updatedTitle;
        }
        return t;
      }),
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="Container">
        <div className="containerTodo">
          <Header />
          <InputTodo addTodoProps={this.addTodoItem} />
          <TodosList
            todos={todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.delTodo}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer;