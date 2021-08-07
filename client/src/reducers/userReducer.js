import { call, put, takeLatest } from 'redux-saga/effects';
import { reqGetLogout, reqGetAuth } from '../api/userApi';

// action.type config
const AUTH = 'AUTH';
const AUTH_SUCCESS = 'AUTH_SUCCESS';
const AUTH_FAILED = 'AUTH_FAILED';

const LOGOUT = 'LOGOUT';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
const LOGOUT_FAILED = 'LOGOUT_FAILED';

// Action
export const logoutAction = () => ({ type: LOGOUT });

export const authAction = () => ({ type: AUTH });

// Worker
function* sagaGetLogout() {
  try {
    const { status } = yield call(reqGetLogout);
    if (status === 200) {
      yield put({ type: LOGOUT_SUCCESS });
    }
  } catch (err) {
    console.log('Logout Error 🚫 ', err);
    yield put({ type: LOGOUT_FAILED });
  }
}

function* sagaGetAuth() {
  try {
    const {
      data: { user },
    } = yield call(reqGetAuth);
    if (user) {
      yield put({
        type: AUTH_SUCCESS,
        user,
      });
    } else {
      yield put({ type: AUTH_FAILED, error: 'No User' });
    }
  } catch (err) {
    console.log('Login Check Error 🚫', err);
    yield put({ type: AUTH_FAILED, error: err });
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
    case AUTH:
      return {
        ...state,
        isLoading: true,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        user: action.user,
        error: null,
      };
    case AUTH_FAILED:
      return {
        ...state,
        isLoading: false,
        user: null,
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
        error: null,
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
  yield takeLatest(AUTH, sagaGetAuth);
  yield takeLatest(LOGOUT, sagaGetLogout);
}
