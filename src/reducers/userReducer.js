import { call, put, takeLatest } from 'redux-saga/effects';
import { reqGetLogout, reqGetAuth, reqPostLogin } from '../api/userApi';

// action.type config
const LOGIN = 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILED = 'LOGIN_FAILED';

const LOGOUT = 'LOGOUT';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
const LOGOUT_FAILED = 'LOGOUT_FAILED';

const AUTH = 'AUTH';

// Action
export const loginAction = (email, password) => ({
  type: LOGIN,
  email,
  password,
});

export const logoutAction = () => ({ type: LOGOUT });

export const AuthAction = () => ({ type: AUTH });

// Worker
function* sagaPostLogin(action) {
  try {
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

function* sagaGetAuth() {
  try {
    const { data: user } = yield call(reqGetAuth);
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
  isLoading: true,
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
    case AUTH:
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
  yield takeLatest(AUTH, sagaGetAuth);
}
