import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loginStatusReducer, { loginStatusSaga } from './loginStatusReducer';

export const rootReducer = combineReducers({
  loginStatusReducer,
});

export function* rootSaga() {
  yield all([loginStatusSaga()]);
}
