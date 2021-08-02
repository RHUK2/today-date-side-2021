import { call, put, takeLatest } from 'redux-saga/effects';
import { reqGetPost, reqGetPosts } from '../api/postApi';

// action.type config
const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_FAILED = 'GET_POST_FAILED';

const GET_POSTS = 'GET_POSTS';
const GET_POSTS_AREA = 'GET_POSTS_AREA';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_FAILED = 'GET_POSTS_FAILED';

// Action
export const getPostAction = (_id) => ({
  type: GET_POST,
  _id,
});

export const getPostsAction = () => ({
  type: GET_POSTS,
});

export const getPostsAreaAction = (area) => ({
  type: GET_POSTS_AREA,
  area,
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
    console.log(`sagaGetPost Error 🚫 `, err);
    yield put({
      type: GET_POST_FAILED,
      error: err,
    });
  }
}

export function* sagaGetPosts(action) {
  try {
    const { data } = yield call(reqGetPosts);
    yield put({
      type: GET_POSTS_SUCCESS,
      data,
    });
  } catch (err) {
    console.log(`sagaGetPosts Error 🚫 `, err);
    yield put({
      type: GET_POSTS_FAILED,
      error: err,
    });
  }
}

export function* sagaGetPostsArea(action) {
  try {
    const { data } = yield call(reqGetPosts, action.area);
    yield put({
      type: GET_POSTS_SUCCESS,
      data,
    });
  } catch (err) {
    console.log(`sagaGetPostsArea Error 🚫 `, err);
    yield put({
      type: GET_POSTS_FAILED,
      error: err,
    });
  }
}

// Init Value
export const initValue = {
  isLoading: true,
  isLoadingAll: true,
  post: null,
  postAll: null,
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
        post: action.data,
      };
    case GET_POST_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case GET_POSTS:
      return {
        ...state,
        isLoadingAll: true,
      };
    case GET_POSTS_AREA:
      return {
        ...state,
        isLoadingAll: true,
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        isLoadingAll: false,
        postAll: action.data,
      };
    case GET_POSTS_FAILED:
      return {
        ...state,
        isLoadingAll: false,
        error: action.error,
      };
    default:
      return state;
  }
};

// Watcher
export function* postWatcher() {
  yield takeLatest(GET_POST, sagaGetPost);
  yield takeLatest(GET_POSTS, sagaGetPosts);
  yield takeLatest(GET_POSTS_AREA, sagaGetPostsArea);
}
