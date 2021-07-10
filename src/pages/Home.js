import styled from 'styled-components';
import Layout from '../layouts/Layout';

const S = {};

S.Main = styled.main`
  background-color: teal;
  min-height: calc(100vh - 260px);
  max-width: 1600px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
`;

S.MainImg = styled.img`
  grid-row: 1 / 2;
  width: 100%;
  height: 100%;
  background-color: aqua;
`;

S.PostContainer = styled.article`
  grid-row: 2 / -1;
  padding: 3rem;
`;

S.Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 3rem;
`;

S.BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

S.PostBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto-fit, 300px);
`;

function Home() {
  return (
    <Layout>
      <S.Main>
        <S.MainImg alt="" />
        <S.PostContainer>
          <S.Title>데이트 장소를 공유해봐요.</S.Title>
          <S.BtnBox>
            <button>위치</button>
            <button>정렬</button>
          </S.BtnBox>
          <S.PostBox>
            <h2>1</h2>
          </S.PostBox>
        </S.PostContainer>
      </S.Main>
    </Layout>
  );
}

export default Home;
