/**
 * initialState
 * Object that defines the initial state.
 */
const initialState = {
  todos: [],
  hasErrored: false,
  isLoading: false,
  isSuccessful: false,
};

/**
 * Reducer for todo state.
 * @param {object} state - The initial state defined.
 * @param {string} action - The action that triggers a new state.
 * @return {object} A new immutable state.
 */
export default function todo(state = initialState, action) {
  /**
   * We set newState equal to all the properties of current state.
   */
  const newState = { ...state };
  switch (action.type) {
    case 'TODO_IS_LOADING':
      newState.isLoading = action.isLoading;
      return newState;
    case 'TODO_HAS_ERROR':
      newState.hasErrored = action.hasErrored;
      return newState;
    case 'TODO_IS_SUCCESSFUL':
      /**
       * We want to avoid mutating the original array.
       * What we do is concatinate to the copy and avoid mutation.
       * http://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html
       */
      newState.todos = newState.todos.concat(action.items);
      return newState;
    default:
      return newState;
  }
}
