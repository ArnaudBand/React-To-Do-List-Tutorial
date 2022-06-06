import React from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };

  handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      this.setState({ editing: false });
    }
  };

  render() {
    const completedStyle = {
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    const { todo } = this.props;
    const { completed, id, title } = todo;

    const viewMode = {};
    const editMode = {};

    const { editing } = this.state;
    if (editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }

    const { handleChangeProps, setUpdate } = this.props;
    return (
      <div className="items">
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => handleChangeProps(id)}
          />
          <span style={completed ? completedStyle : null}>{title}</span>
        </div>
        <input
          type="text"
          className="textInput"
          style={editMode}
          value={title}
          onChange={(e) => {
            setUpdate(e.target.value, id);
          }}
          onKeyDown={this.handleUpdatedDone}
        />
        <button type="button">
            Delete
        </button>
      </div>
    );
  }
}

TodoItem.propTypes = {
  handleChangeProps: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,
};

export default TodoItem;