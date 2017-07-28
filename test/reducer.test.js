import chai from 'chai';
import todo from '../src/reducers/todo';

const expect = chai.expect;

const initialState = {
  todos: [],
};

const endState = {
  todos: [
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
  ]
};

describe('todo reducer', () => {

  it('should return the initial state', () => {
    expect(todo({}, {})).to.deep.equal({});
  });

  it('should return loading state', () => {
    expect(todo({}, {
        type: 'TODO_IS_LOADING',
        isLoading: true
      })
    ).to.deep.equal({isLoading: true});
  });

  it('should return error state', () => {
    expect(todo({}, {
        type: 'TODO_HAS_ERROR',
        hasErrored: true
      })
    ).to.deep.equal({hasErrored: true});
  });

  it('should return loading state', () => {
    expect(todo({}, {
        type: 'TODO_IS_LOADING',
        isLoading: true
      })
    ).to.deep.equal({isLoading: true});
  });

  it('should return successful state', () => {
    expect(todo(initialState, {
        type: 'TODO_IS_SUCCESSFUL',
        items: endState.todos
      })
    ).to.deep.equal(endState);
  });

  it('should return todo remove state', () => {
    const expectedRes = {
      'todos': [{
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false,
      }],
    };
    const todoToRemove = {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false,
    };

    expect(todo(endState, {
      type: 'TODO_TO_REMOVE',
      item: todoToRemove,
    })).to.deep.equal(expectedRes);
  });
});
