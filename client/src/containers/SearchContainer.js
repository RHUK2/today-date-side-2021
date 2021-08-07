import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Search from '../pages/Search';
import { getPostsAction } from '../reducers/postReducer';

function SearchContainer({ location }) {
  const query = location.search.split('=')[1];
  const { isLoading, posts } = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsAction({ term: query }));
  }, [query, dispatch]);

  return <Search isLoading={isLoading} posts={posts} query={query} />;
}

export default SearchContainer;
