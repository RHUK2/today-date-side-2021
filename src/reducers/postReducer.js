import { call, put, takeLatest } from 'redux-saga/effects';
import { reqGetPost, reqGetAllPost, reqGetPostArea } from '../api/postApi';

// action.type config
const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_FAILED = 'GET_POST_FAILED';
const GET_POST_ALL = 'GET_POST_ALL';
const GET_POST_ALL_SUCCESS = 'GET_POST_ALL_SUCCESS';
const GET_POST_ALL_FAILED = 'GET_POST_ALL_FAILED';
const GET_POST_AREA = 'GET_POST_AREA';
const GET_POST_AREA_SUCCESS = 'GET_POST_AREA_SUCCESS';
const GET_POST_AREA_FAILED = 'GET_POST_AREA_FAILED';

// Action
export const getPostAction = (_id) => ({
  type: GET_POST,
  _id,
});

export const getPostAllAction = () => ({
  type: GET_POST_ALL,
});

export const getPostAreaAction = (area) => ({
  type: GET_POST_AREA,
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
    console.log(`getPost Error 🚫 `, err);
    yield put({
      type: GET_POST_FAILED,
      error: err,
    });
  }
}

export function* sagaGetPostAll() {
  try {
    const { data } = yield call(reqGetAllPost);
    yield put({
      type: GET_POST_ALL_SUCCESS,
      data,
    });
  } catch (err) {
    console.log(`getPostAll Error 🚫 `, err);
    yield put({
      type: GET_POST_ALL_FAILED,
      error: err,
    });
  }
}

export function* sagaGetPostArea(action) {
  try {
    const { data } = yield call(reqGetPostArea, action.area);
    yield put({
      type: GET_POST_AREA_SUCCESS,
      data,
    });
  } catch (err) {
    console.log(`getPostAll Error 🚫 `, err);
    yield put({
      type: GET_POST_AREA_FAILED,
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
    case GET_POST_ALL:
      return {
        ...state,
        isLoadingAll: true,
      };
    case GET_POST_ALL_SUCCESS:
      return {
        ...state,
        isLoadingAll: false,
        postAll: action.data,
      };
    case GET_POST_ALL_FAILED:
      return {
        ...state,
        isLoadingAll: false,
        error: action.error,
      };
    case GET_POST_AREA:
      return {
        ...state,
        isLoadingAll: true,
      };
    case GET_POST_AREA_SUCCESS:
      return {
        ...state,
        isLoadingAll: false,
        postAll: action.data,
      };
    case GET_POST_AREA_FAILED:
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
  yield takeLatest(GET_POST_ALL, sagaGetPostAll);
  yield takeLatest(GET_POST_AREA, sagaGetPostArea);
}
