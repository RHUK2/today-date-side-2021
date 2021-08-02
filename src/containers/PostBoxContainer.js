import { useState } from 'react';
import { useSelector } from 'react-redux';
import PostBox from '../components/PostBox';

function PostBoxContainer() {
  const [currentPage, setCurrentPage] = useState(0);
  const { posts } = useSelector((state) => state.postReducer);

  const PER_PAGE = 12;
  const offset = currentPage * PER_PAGE;
  const currentPageData = posts.slice(offset, offset + PER_PAGE);
  const pageCount = Math.ceil(posts.length / PER_PAGE);

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
