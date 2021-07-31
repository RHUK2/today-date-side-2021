import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Home from '../pages/Home';
import { getPostAllAction } from '../reducers/postReducer';

function HomeContainer({ history }) {
  const [currentPage, setCurrentPage] = useState(0);
  const { isLoggedIn } = useSelector((state) => state.userReducer);
  const { isLoadingAll, postAll } = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();

  const PER_PAGE = 6;
  const offset = currentPage * PER_PAGE;
  const currentPageData = postAll.slice(offset, offset + PER_PAGE);
  const pageCount = Math.ceil(postAll.length / PER_PAGE);

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

  const onChangePage = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  return (
    <Home
      isLoggedIn={isLoggedIn}
      isLoadingAll={isLoadingAll}
      currentPageData={currentPageData}
      pageCount={pageCount}
      onChangePage={onChangePage}
      onGoPost={onGoPost}
    />
  );
}

export default HomeContainer;
