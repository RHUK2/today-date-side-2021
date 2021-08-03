import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Home from '../pages/Home';
import {
  getPostsAction,
  getPostsAreaAction,
  initIsLoading,
} from '../reducers/postReducer';

function HomeContainer({ history }) {
  const { isLoggedIn } = useSelector((state) => state.userReducer);
  const { isLoading, posts } = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsAction());
    return () => {
      dispatch(initIsLoading());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeArea = (e) => {
    const { value: area } = e.target;
    dispatch(getPostsAreaAction(area));
  };

  const onGoPost = () => {
    if (!isLoggedIn) {
      history.push('/login');
    } else {
      history.push('/post/upload');
    }
  };

  return (
    <Home
      isLoading={isLoading}
      posts={posts}
      onGoPost={onGoPost}
      onChangeArea={onChangeArea}
    />
  );
}

export default HomeContainer;
