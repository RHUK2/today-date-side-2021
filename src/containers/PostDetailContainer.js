import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPostAction, initIsLoading } from '../reducers/postReducer';
import PostDetail from '../pages/PostDetail';
import { reqDelPost } from '../api/postApi';

function PostDetailContainer({ history, match }) {
  const { isLoading, post } = useSelector((state) => state.postReducer);
  const { isLoggedIn, user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostAction(match.params.id));
    return () => {
      dispatch(initIsLoading());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPostDelete = async () => {
    await reqDelPost(match.params.id);
    history.push('/');
  };

  return (
    <PostDetail
      isLoggedIn={isLoggedIn}
      isLoading={isLoading}
      user={user}
      post={post}
      onPostDelete={onPostDelete}
    />
  );
}

export default PostDetailContainer;
