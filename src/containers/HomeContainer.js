import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Home from '../pages/Home';
import { getPostAllAction } from '../reducers/postReducer';

function HomeContainer({ history }) {
  const { isLoggedIn } = useSelector((state) => state.userReducer);
  const { isLoadingAll, postAll } = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostAllAction());
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onGoPost = () => {
    if (!isLoggedIn) {
      history.push('/login');
    } else {
      history.push('/post/write');
    }
  };

  return (
    <Home isLoadingAll={isLoadingAll} postAll={postAll} onGoPost={onGoPost} />
  );
}

export default HomeContainer;
