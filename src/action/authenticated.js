import hello from '../vendor/hello.all.js';

export function userIsAuthenticated(bool) {
  return {
    type: 'USER_IS_AUTHENTICATED',
    isLogged: bool,
  };
}

export function createUserSession(items) {
  return {
    type: 'CREATE_USER_SESSION',
    items,
  };
}

export function destroyUserSession(items) {
  return {
    type: 'DESTROY_USER_SESSION',
    items,
  };
}

export function getUserSession(items) {
  return {
    type: 'GET_USER_SESSION',
    items,
  };
}

export function userIsLoading(bool) {
  return {
    type: 'USER_IS_LOADING',
    isLoading: bool,
  };
}

export function userHasError(bool) {
  return {
    type: 'USER_HAS_ERROR',
    hasErrored: bool,
  };
}

/* Action Creators */
export function authenticateUser() {
  return (dispatch) => {
    dispatch(userIsLoading(true));
    // Set service to login
    hello('service-name-goes-here').login(
      // Set scope permission
      //{ scope: 'repo,user' }
    ).then(function(){
      // Fetch user information
      return hello('service-name-goes-here').api('me');
    })
   .then((items) => {
      if (!items) {
        dispatch(userHasError(true));
        console.error('Error');
      }
      dispatch(userIsLoading(false));
      dispatch(userIsAuthenticated(true));
      dispatch(createUserSession(items));
    });
  };
}

export function logoutUser(){
    return (dispatch) => {
        dispatch(userIsLoading(true));
        hello('service-name-goes-here').logout()
        .then(function(e){
            dispatch(userIsLoading(false));
            dispatch(userIsAuthenticated(false));
            dispatch(destroyUserSession());
        });
    }
}

export function fetchUserSession() {
    return (dispatch) => {
        dispatch(userIsLoading(true));
        let service = hello('service-name-goes-here').getAuthResponse();
        if (!service) {
            dispatch(userIsAuthenticated(false));
            dispatch(userIsLoading(false));
            return;
        }
        hello('service-name-goes-here').api('me')
        .then((items) => {
            dispatch(userIsLoading(false));
            dispatch(userIsAuthenticated(true));
            dispatch(getUserSession(items));
        });
    }
}