import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

class InputTodo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // eslint-disable-next-line consistent-return
  onSubmit = (e) => {
    e.preventDefault();
    const { title } = this.state;
    const { addTodoProps } = this.props;
    if (title.trim()) {
      addTodoProps(title);
      this.setState({
        title: '',
      });
    } else {
      alert('Please write an item');
      return false;
    }
  };

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.onSubmit} className="form-container">
        <input
          type="text"
          name="title"
          className="input-text"
          placeholder="Add new task"
          value={title}
          onChange={this.onChange}
        />
        <button type="submit" className="btn-submit">
          Add
        </button>
      </form>
    );
  }
}

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};

export default InputTodo;
