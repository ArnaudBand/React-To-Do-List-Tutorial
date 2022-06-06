import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import InputTodo from './InputTodos';
import TodosList from './TodoList';

export class TodoContainer extends React.Component {
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
          title: 'Start building the react to do list',
          completed: false,
        },
        {
          id: uuidv4(),
          title: 'Take a break for 1 hour',
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
        <div className="card">
          <Header />
          <InputTodo addTodoProps={this.addTodoItem} />
          <TodosList
            todos={todos}
            handleChangeProps={this.handleChange}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer;