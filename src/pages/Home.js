import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../layouts/Layout';
import ReactPaginate from 'react-paginate';

const S = {};

S.Main = styled.main`
  background-color: #fffdf7;
  min-height: 100vh;
  max-width: 1600px;
  margin: 80px auto 0px auto;
`;

S.MainImgContainer = styled.div`
  position: relative;
`;

S.MainImg = styled.img`
  width: 100%;
  min-width: 800px;
`;

S.MessageBox = styled.div`
  position: absolute;
  top: 20%;
  left: 10%;

  width: 90%;
  margin-bottom: 2rem;
`;

S.Message = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 1.2;
  :first-of-type {
    font-size: 5rem;
    margin-bottom: 2rem;
  }
  :not(:first-of-type) {
    font-size: 3rem;
  }
  :last-of-type {
    margin-bottom: 3rem;
  }
`;

S.ShareBtn = styled.button`
  background-color: #222021;
  color: white;
  padding: 0.7rem 2rem 0.5rem;
  font-size: 3rem;
`;

S.PostContainer = styled.article`
  padding: 3rem;
  min-height: 50vh;
`;

S.Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 3rem;
`;

S.BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

S.PostBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  grid-template-rows: repeat(auto-fit, max-content);
  gap: 2rem;
`;

S.Post = styled.div`
  border-radius: 0.5rem;
  background-color: transparent;
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 0.5rem;
  }
`;

S.PostTitle = styled.h2`
  margin-top: 1rem;
  font-size: 2.5rem;
`;

S.PostInfo = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 1.7rem;
  margin-top: 0.5rem;
`;

S.PaginateContainer = styled.div`
  .pagination-ul {
    display: flex;
    justify-content: space-between;
    font-size: 2rem;
    width: 250px;
    margin: 5rem auto 0;
  }
  li {
    cursor: pointer;
  }
`;

function Home({
  isLoggedIn,
  isLoadingAll,
  currentPageData,
  pageCount,
  onChangePage,
  onGoPost,
}) {
  return (
    <Layout>
      <S.Main>
        <S.MainImgContainer>
          <S.MainImg src={'/images/main-image.png'} alt="" />
          <S.MessageBox>
            <S.Message>데이트 장소가 고민된다면?</S.Message>
            <S.Message>데이트 장소 공유를 통해</S.Message>
            <S.Message>알찬 데이트를 즐겨보자!</S.Message>
            <S.ShareBtn onClick={onGoPost}>공유하러 가기</S.ShareBtn>
          </S.MessageBox>
        </S.MainImgContainer>
        <S.PostContainer>
          <S.Title>데이트 장소를 공유해봐요.</S.Title>
          <S.BtnBox>
            <button>위치</button>
            <select>
              <option>전체</option>
              <option>서울</option>
              <option>부산</option>
              <option>제주도</option>
              <option>강원도</option>
              <option>경기도</option>
              <option>인천</option>
              <option>경상도</option>
              <option>전라도</option>
              <option>충청도</option>
            </select>
            <button>정렬</button>
          </S.BtnBox>
          {isLoadingAll ? null : (
            <S.PostBox>
              {currentPageData.map((post) => (
                <Link to={`/post/${post._id}`}>
                  <S.Post>
                    <img src={post.imgURL[0]} alt="" />
                    <S.PostTitle>{post.title}</S.PostTitle>
                    <S.PostInfo>
                      <span>{post.creator.nickname}</span>
                      <span>{post.area}</span>
                    </S.PostInfo>
                  </S.Post>
                </Link>
              ))}
            </S.PostBox>
          )}
          <S.PaginateContainer>
            <ReactPaginate
              pageCount={pageCount}
              pageRangeDisplayed={5}
              marginPagesDisplayed={1}
              breakLabel={'..'}
              previousLabel={'이전'}
              nextLabel={'다음'}
              onPageChange={onChangePage}
              containerClassName={'pagination-ul'}
              activeClassName={'currentPage'}
              previousClassName={'pageLabel-btn'}
              nextClassName={'pageLabel-btn'}
            />
          </S.PaginateContainer>
        </S.PostContainer>
      </S.Main>
    </Layout>
  );
}

export default Home;
