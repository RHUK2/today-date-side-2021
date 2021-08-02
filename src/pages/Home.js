import styled from 'styled-components';
import Layout from '../layouts/Layout';
import PostBoxContainer from '../containers/PostBoxContainer';

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

S.Select = styled.select`
  padding: 0.5rem 1rem 0.4rem;
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

function Home({ isLoading, onGoPost, onChangeArea }) {
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
          <S.Select onChange={onChangeArea}>
            <option value="">전체</option>
            <option value="서울">서울</option>
            <option value="부산">부산</option>
            <option value="제주도">제주도</option>
            <option value="강원도">강원도</option>
            <option value="경기도">경기도</option>
            <option value="인천">인천</option>
            <option value="경상도">경상도</option>
            <option value="전라도">전라도</option>
            <option value="충청도">충청도</option>
          </S.Select>
          {isLoading ? null : <PostBoxContainer />}
        </S.PostContainer>
      </S.Main>
    </Layout>
  );
}

export default Home;
