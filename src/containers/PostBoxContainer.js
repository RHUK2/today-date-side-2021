import { useState } from 'react';
import { useSelector } from 'react-redux';
import PostBox from '../components/PostBox';

function PostBoxContainer() {
  const [currentPage, setCurrentPage] = useState(0);
  const { postAll } = useSelector((state) => state.postReducer);

  const PER_PAGE = 5;
  const offset = currentPage * PER_PAGE;
  const currentPageData = postAll.slice(offset, offset + PER_PAGE);
  const pageCount = Math.ceil(postAll.length / PER_PAGE);

  const onChangePage = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  return (
    <PostBox
      currentPageData={currentPageData}
      pageCount={pageCount}
      onChangePage={onChangePage}
    />
  );
}

export default PostBoxContainer;
