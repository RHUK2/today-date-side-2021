import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostAllAction, getPostAreaAction } from '../reducers/postReducer';
import Home from '../pages/Home';

function HomeContainer({ history }) {
  const { isLoggedIn } = useSelector((state) => state.userReducer);
  const { isLoadingAll } = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostAllAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeArea = (e) => {
    const { value: area } = e.target;
    dispatch(getPostAreaAction(area));
  };

  const onGoPost = () => {
    if (!isLoggedIn) {
      history.push('/login');
    } else {
      history.push('/post/write');
    }
  };

  return (
    <Home
      isLoadingAll={isLoadingAll}
      onGoPost={onGoPost}
      onChangeArea={onChangeArea}
    />
  );
}

export default HomeContainer;
