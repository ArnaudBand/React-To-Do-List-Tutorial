import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

export class TodosList extends React.PureComponent {
  render() {
    const {
      todos, handleChangeProps, setUpdate,
    } = this.props;

    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={handleChangeProps}
            setUpdate={setUpdate}
          />
        ))}
      </ul>
    );
  }
}
TodosList.propTypes = {
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
};
export default TodosList;