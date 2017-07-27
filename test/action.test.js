import chai from 'chai';
import {
  todoIsLoading,
  todohasError,
  todoIsSuccessful,
  removeTodoFromTodos,
} from '../src/action/todo';

const expect = chai.expect;


describe('actions', () => {
  it('todoIsLoading', () => {
    expect(todoIsLoading().type).to.equal('TODO_IS_LOADING');
    expect(todoIsLoading(true).isLoading).to.equal(true);
  });

  it('todohasError', () => {
    expect(todohasError().type).to.equal('TODO_HAS_ERROR');
    expect(todohasError(true).hasErrored).to.equal(true);
  });

  it('todoIsSuccessful', () => {
    const todos = [{ todo: 1, todo: 2 }];
    expect(todoIsSuccessful().type).to.equal('TODO_IS_SUCCESSFUL');
    expect(todoIsSuccessful(todos).items).to.equal(todos);
  });

  it('removeTodoFromTodos', () => {
    const todo = { title: 'fake' };
    const todoRemovedAction = removeTodoFromTodos(todo);
    const expectedAction = { type: 'TODO_TO_REMOVE', item: todo };
    expect(todoRemovedAction).to.deep.equal(expectedAction);
  });
});
