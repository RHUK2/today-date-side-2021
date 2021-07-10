import styled from 'styled-components';

const MainTag = styled.main`
  background-color: teal;
  min-height: calc(100vh - 260px);
  max-width: 1600px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
`;

const ImgRep = styled.img`
  grid-row: 1 / 2;
  width: 100%;
  height: 100%;
  background-color: aqua;
`;

const ArticleDateReview = styled.article`
  grid-row: 2 / -1;
  padding: 3rem;
`;

const H1Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 3rem;
`;

const DivBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const DivPostBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto-fit, 300px);
`;

function Home() {
  return (
    <MainTag>
      <ImgRep alt="" />
      <ArticleDateReview>
        <H1Title>데이트 장소를 공유해봐요.</H1Title>
        <DivBtnBox>
          <button>위치</button>
          <button>정렬</button>
        </DivBtnBox>
        <DivPostBox>
          <h2>1</h2>
        </DivPostBox>
      </ArticleDateReview>
    </MainTag>
  );
}

export default Home;
