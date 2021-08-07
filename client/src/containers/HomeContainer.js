import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAction, initIsLoading } from '../reducers/postReducer';
import Home from '../pages/Home';

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
    dispatch(getPostsAction({ area }));
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
