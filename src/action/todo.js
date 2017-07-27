/**
 * Action creater that handles loading state.
 * @param {boolean} bool - Flag of loading state.
 * @return {object} New state.
 */
export function todoIsLoading(bool) {
  return {
    type: 'TODO_IS_LOADING',
    isLoading: bool,
  };
}

/**
 * Action creater that handles error state.
 * @param {boolean} bool - Flag of error in request.
 * @return {object} New state.
 */
export function todohasError(bool) {
  return {
    type: 'TODO_HAS_ERROR',
    hasErrored: bool,
  };
}

/**
 * Action creater that returns a new list of todos.
 * @param {object} items - Todos.
 * @return {object} New state.
 */
export function todoIsSuccessful(items) {
  return {
    type: 'TODO_IS_SUCCESSFUL',
    items,
  };
}

/**
 * Action creater that removes a todo from list of todos.
 * @param {object} item - Todo.
 * @return {object} New state.
 */
export function todoRemoved(item) {
  return {
    type: 'TODO_TO_REMOVE',
    item,
  };
}

/**
 * Fetches a fake list of TODO.
 * If there is an error, it will call the todoHasError
 * @return {function} Triggers action creators
 */
export function fetchListofTodos() {
  return (dispatch) => {
    dispatch(todohasError(false));
    dispatch(todoIsLoading(true));
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((response) => {
        dispatch(todoIsLoading(false));
        dispatch(todoIsSuccessful(response));
      })
      .catch(() => {
        dispatch(todoIsLoading(false));
        dispatch(todohasError(true));
      });
  };
}

/**
 * Removes a TODO in list of TODOs.
 * @return {function} Triggers action creators
 */
export function removeTodoFromTodos(todo) {
  return (dispatch) => {
    dispatch(todoRemoved(todo));
  };
}
