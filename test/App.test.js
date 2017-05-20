import React from 'react';
import chai from 'chai';
import { mount, render, shallow } from 'enzyme';
import { Todo } from '../src/components/Todo/Todo';

const expect = chai.expect;

const todos = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  }
];

const expectedAllTodosHTML = `<div class="todo"><h1>All Todos:</h1><ol><li><span>1 : </span>delectus aut autem</li><li><span>1 : </span>quis ut nam facilis et officia qui</li></ol></div>`;

const expectedLoadingHTML = `<div class="todo"><h1>All Todos:</h1><ol><p>Loading...</p></ol></div>`;

describe('<Todo />', () => {

  it('should render the todos passed through props', () => {
    const renderedComponent = shallow(
      <Todo todos={todos} />
    );
    expect(renderedComponent.html()).to.equal(expectedAllTodosHTML);
  });

  it('should render the todos passed through props', () => {
    const renderedComponent = shallow(
      <Todo isLoading={true} />
    );
    expect(renderedComponent.html()).to.equal(expectedLoadingHTML);
  });

});