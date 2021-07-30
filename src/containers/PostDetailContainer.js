import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPostAction } from '../reducers/postReducer';
import PostDetail from '../pages/PostDetail';

function PostDetailContainer({ match }) {
  const { isLoading, data } = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostAction(match.params.id));
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <PostDetail isLoading={isLoading} data={data} />;
}

export default PostDetailContainer;
