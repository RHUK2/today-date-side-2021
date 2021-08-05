import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAction } from '../reducers/postReducer';
import Mypage from '../pages/Mypage';

function MypageContainer() {
  const { user } = useSelector((state) => state.userReducer);
  const { isLoading, posts } = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsAction({ creatorID: user._id }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Mypage isLoading={isLoading} posts={posts} user={user} />;
}

export default MypageContainer;
