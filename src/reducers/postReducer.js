import { call, put, takeLatest } from 'redux-saga/effects';
import { reqGetPost } from '../api/postApi';

// action.type config
const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_FAILED = 'GET_POST_FAILED';

// Action
export const getPostAction = (_id) => ({
  type: GET_POST,
  _id,
});

// Worker
export function* sagaGetPost(action) {
  try {
    const { data } = yield call(reqGetPost, action._id);
    yield put({
      type: GET_POST_SUCCESS,
      data,
    });
  } catch (err) {
    console.log(`getPost Error 🚫 `, err);
    yield put({
      type: GET_POST_FAILED,
      error: err,
    });
  }
}

// Init Value
export const initValue = {
  isLoading: true,
  data: null,
  error: null,
};

// Reducer
export const postReducer = (state = initValue, action) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data,
      };
    case GET_POST_FAILED:
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
export function* postWatcher() {
  yield takeLatest(GET_POST, sagaGetPost);
}
