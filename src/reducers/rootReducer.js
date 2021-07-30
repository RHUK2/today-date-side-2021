import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { postReducer, postWatcher } from './postReducer';
import { modalReducer } from './modalReducer';
import { userReducer, userWatcher } from './userReducer';

export const rootReducer = combineReducers({
  userReducer,
  modalReducer,
  postReducer,
});

export function* rootSaga() {
  yield all([userWatcher(), postWatcher()]);
}
