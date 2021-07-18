// action.type config
const LOGIN_SUCCESS = 'login';
const LOGOUT_SUCCESS = 'logout';

// dispatch action object
export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

// initValue
const initValue = {
  isLoggedIn: null,
};

// Reducer
const loginStatusReducer = (state = initValue, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default loginStatusReducer;
