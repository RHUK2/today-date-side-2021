import { call, put, takeEvery } from 'redux-saga/effects';
import { reqGetUser } from '../api/apiCall';

// action.type config
const LOGIN = 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILED = 'LOGIN_FAILED';

export const loginAction = () => ({ type: LOGIN });

function* getUserSaga() {
  try {
    const { data: user } = yield call(reqGetUser);
    console.log(user);
    if (user) {
      yield put({
        type: LOGIN_SUCCESS,
        email: user.email,
        nickname: user.nickname,
      });
    } else {
      yield put({ type: LOGIN_FAILED, error: 'User is not exist.' });
    }
  } catch (err) {
    console.log('GetUser Error 🚫', err);
  }
}

// initValue
const initValue = {
  isLoggedIn: null,
  email: null,
  nickname: null,
  error: null,
};

// Reducer
const loginStatusReducer = (state = initValue, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: null,
        email: null,
        nickname: null,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        email: action.email,
        nickname: action.nickname,
        error: null,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        email: null,
        nickname: null,
        error: action.error,
      };
    default:
      return state;
  }
};

export function* loginStatusSaga() {
  yield takeEvery(LOGIN, getUserSaga);
}

export default loginStatusReducer;
