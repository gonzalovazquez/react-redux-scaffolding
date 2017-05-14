import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchListofTodos } from '../../action/todo';

/**
 * Todo Component.
 * Fetches and displays todos in a list.
 * @class Todo
 * @extends {Component}
 */
class Todo extends Component {
  /**
   * Fetches todo onLoad.
   */
  componentDidMount() {
    this.props.getTodos();
  }
  render() {
    return (
      <div>
        <h1>All Todos:</h1>
        <ol>
          {this.props.isLoading ? <p>Loading...</p> :
          this.props.todos.map((value, index) => (
            <li key={index}>
              <span>{value.userId} : </span>
              {value.title}
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

/**
 * Connects todo state to properties
 * @param {object} state - User state.
 */
const mapStateToProps = (state) => ({
  hasError: state.todo.hasErrored,
  isLoading: state.todo.isLoading,
  todos: state.todo.todos,
});

/**
 * Event for retriving Todos
 * @param {function} dispatch - Fires event.
 */
const mapDispatchToProps = (dispatch) => ({
  getTodos: () => dispatch(fetchListofTodos()),
});

/**
 * propTypes
 * @property {array} todos - Array of all the todos.
 * @property {boolean} hasError - Flag if there is an error.
 * @property {boolean} isLoading - Flag when request is loading.
 * @property {function} getTodos - Function to fetch todos.
 */
Todo.propTypes = {
  todos: PropTypes.array,
  hasError: PropTypes.bool,
  isLoading: PropTypes.bool,
  getTodos: PropTypes.func,
};

/**
 * Connects to Redux.
 */
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
