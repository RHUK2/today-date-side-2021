import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPostAction } from '../reducers/postReducer';
import PostDetail from '../pages/PostDetail';

function PostDetailContainer({ match }) {
  const { isLoading, post } = useSelector((state) => state.postReducer);
  const { isLoggedIn, user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostAction(match.params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PostDetail
      isLoggedIn={isLoggedIn}
      isLoading={isLoading}
      user={user}
      post={post}
    />
  );
}

export default PostDetailContainer;
