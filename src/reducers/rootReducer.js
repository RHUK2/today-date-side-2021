import { combineReducers } from 'redux';
import loginStatusReducer from './loginStatusReducer';

const rootReducer = combineReducers({
  loginStatusReducer,
});

export default rootReducer;
