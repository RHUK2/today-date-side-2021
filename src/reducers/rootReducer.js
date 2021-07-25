import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { modalReducer } from './modalReducer';
import { userReducer, userWatcher } from './userReducer';

export const rootReducer = combineReducers({
  userReducer,
  modalReducer,
});

export function* rootSaga() {
  yield all([userWatcher()]);
}
