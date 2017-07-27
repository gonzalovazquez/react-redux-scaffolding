import React from 'react';
import chai from 'chai';
import { mount, render, shallow } from 'enzyme';
import { Todo } from '../src/components/Todo/Todo';
import * as sinon from 'sinon';

const expect = chai.expect;

const todos = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false,
  },
];

const expectedAllTodosHTML = '<div class="todo"><h1>All Todos:</h1><ol><li><span>1 : </span>delectus aut autem</li><li><span>1 : </span>quis ut nam facilis et officia qui</li></ol></div>';

const expectedLoadingHTML = '<div class="todo"><h1>All Todos:</h1><ol><p>Loading...</p></ol></div>';

describe('<Todo />', () => {
  context('while Todo component loading', () => {
    it('should show loading indicator', () => {
      const renderedComponent = shallow(
        <Todo isLoading />
      );
      expect(renderedComponent.html()).to.equal(expectedLoadingHTML);
    });
  });

  context('when Todo component rendered', () => {
    let renderedComponent;
    const removeTodoExpectedComponentHtml = '<div class="todo"><h1>All Todos:</h1><ol><li><span>1 : </span>quis ut nam facilis et officia qui</li></ol></div>';

    const setup = (props) => {
      renderedComponent = shallow(
        <Todo {...props} />
      );
    };
    it('should render the todos passed through props', () => {
      setup({ todos });
      expect(renderedComponent.html()).to.equal(expectedAllTodosHTML);
    });

    it('should remove a todo on click', () => {
      const props = { todos, removeTodo: sinon.spy() };
      setup(props);
      renderedComponent.find('ol').children().first().simulate('click');
      expect(props.removeTodo.called).to.be.truthy;
      expect(props.removeTodo.calledWith(props.todos)).to.be.truthy;
    });

    it('should remove a todo on click', () => {
      const props = {
        todos,
        removeTodo(todo) {
          props.todos = props.todos.filter((itm) => itm.title !== todo.title);
        },
      };
      setup(props);
      renderedComponent.find('ol').children().first().simulate('click');
      const renderComponentAfterClick = shallow(<Todo {...props} />);
      expect(renderComponentAfterClick.html()).to.equal(removeTodoExpectedComponentHtml);
    });
  });
});
