/**
 * initialState
 * Object that defines the initial state.
 */
const initialState = {
  todo: {},
  hasErrored: false,
  isLoading: false,
};

/**
 * Reducer for todo state.
 * @param {object} state - The initial state defined.
 * @param {string} action - The action that triggers a new state.
 * @return {object} A new immutable state.
 */
export default function todo(state = initialState, action) {
  const newState = state;
  switch (action.type) {
    case 'TODO_IS_LOADING':
      newState.isLoading = action.isLoading;
      return newState;
    case 'TODO_HAS_ERROR':
      newState.hasErrored = action.hasErrored;
      return newState;
    case 'TODO_IS_SUCCESSFUL':
      newState.todo = Object.assign({}, state, action.items);
      return newState;
    default:
      return newState;
  }
}
