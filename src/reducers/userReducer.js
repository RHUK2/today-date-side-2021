import { call, put, takeLatest } from 'redux-saga/effects';
import { reqGetLogout, reqGetUser, reqPostLogin } from '../api/userApi';

// action.type config
const LOGIN = 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILED = 'LOGIN_FAILED';
const LOGOUT = 'LOGOUT';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
const LOGOUT_FAILED = 'LOGOUT_FAILED';
const LOGIN_CHECK = 'LOGIN_CHECK';

// Action
export const loginAction = (email, password) => ({
  type: LOGIN,
  email,
  password,
});

export const loginCheckAction = () => ({ type: LOGIN_CHECK });

export const logoutAction = () => ({ type: LOGOUT });

// Worker
function* sagaPostLogin(action) {
  try {
    console.log(action);
    const { data: user } = yield call(
      reqPostLogin,
      action.email,
      action.password,
    );
    if (user) {
      yield put({
        type: LOGIN_SUCCESS,
        user,
      });
    } else {
      yield put({
        type: LOGIN_FAILED,
        error: 'User is not exist.',
      });
    }
  } catch (err) {
    console.log('Login Error 🚫 ', err);
    yield put({
      type: LOGIN_FAILED,
      error: err,
    });
  }
}

function* sagaGetLogout() {
  try {
    yield call(reqGetLogout);
    yield put({ type: LOGOUT_SUCCESS });
  } catch (err) {
    console.log('Logout Error 🚫 ', err);
    yield put({ type: LOGOUT_FAILED });
  }
}

function* sagaGetUser() {
  try {
    const { data: user } = yield call(reqGetUser);
    if (user) {
      yield put({
        type: LOGIN_SUCCESS,
        user,
      });
    } else {
      yield put({ type: LOGIN_FAILED, error: 'User is not logged In.' });
    }
  } catch (err) {
    console.log('Login Check Error 🚫', err);
    yield put({ type: LOGIN_FAILED, error: err });
  }
}

// Init Value
const initValue = {
  isLoading: false,
  isLoggedIn: false,
  user: null,
  error: null,
};

// Reducer
export const userReducer = (state = initValue, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_CHECK:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        user: action.user,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case LOGOUT:
      return {
        ...state,
        isLoading: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        user: null,
      };
    case LOGOUT_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

// Watcher
export function* userWatcher() {
  yield takeLatest(LOGIN, sagaPostLogin);
  yield takeLatest(LOGOUT, sagaGetLogout);
  yield takeLatest(LOGIN_CHECK, sagaGetUser);
}
