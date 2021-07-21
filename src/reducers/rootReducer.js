import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { userReducer, userWatcher } from './userReducer';

export const rootReducer = combineReducers({
  userReducer,
});

export function* rootSaga() {
  yield all([userWatcher()]);
}
