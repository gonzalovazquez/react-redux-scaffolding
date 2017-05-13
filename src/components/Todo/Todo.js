import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'

class Todo extends Component {
    render(){
      return(
        <div>
          <div>
              <div>
                <h1>Main content goes here </h1>
              </div>
        </div>
      </div>)
    }
}

Todo.propTypes = {
  todos: PropTypes.array,
};

export default Todo;