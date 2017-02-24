const initialState = {
    logged: false,
    user: {},
    hasErrored: false,
    isLoading: false
};

export default function authenticated(state = initialState, action) {
  const newState = state;
  switch (action.type) {
    case 'USER_IS_LOADING':
        newState.isLoading = action.isLoading;
        return newState;
    case 'USER_HAS_ERROR':
        newState.hasErrored = action.hasErrored;
        return newState;
    case 'USER_IS_AUTHENTICATED':
        newState.logged = action.isLogged;
        return newState;
    case 'CREATE_USER_SESSION':
        newState.user = Object.assign({}, state, action.items);
        return newState;
    case 'DESTROY_USER_SESSION':
         newState.user =  Object.assign({}, state = {} , {});
         return newState
    case 'GET_USER_SESSION':
        newState.user = Object.assign({}, state, action.items);
        return newState;
    default:
      return newState;
  }
}