import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../layouts/Layout';

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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fit, max-content);
  gap: 2rem;
`;

S.Post = styled.div`
  border-radius: 0.5rem;
  background-color: transparent;
  img {
    width: 100%;
    height: 300px;
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

function Home({ isLoadingAll, postAll, onGoPost }) {
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
            <button>정렬</button>
          </S.BtnBox>
          {isLoadingAll ? null : (
            <S.PostBox>
              {postAll.map((post) => (
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
        </S.PostContainer>
      </S.Main>
    </Layout>
  );
}

export default Home;
