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

S.MypageHeader = styled.div`
  height: 200px;
  padding-left: 3rem;
  margin-bottom: 3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: #222021;
  color: white;
`;

S.Title = styled.h1`
  font-size: 5rem;
  margin-bottom: 1rem;
`;

S.Email = styled.span`
  font-size: 2rem;
`;

S.Wrapper = styled.div`
  padding: 0 2rem;
`;

function Mypage({ isLoading, posts, user }) {
  return (
    <Layout>
      <S.Main>
        <S.MypageHeader>
          <S.Title>{`${user.nickname}님의 페이지`}</S.Title>
          <S.Email>{`Email: ${user.email}`}</S.Email>
        </S.MypageHeader>
        <S.Wrapper>
          {!isLoading && posts && <PostBoxContainer posts={posts} />}
        </S.Wrapper>
      </S.Main>
    </Layout>
  );
}

export default Mypage;
