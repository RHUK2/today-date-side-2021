import styled from 'styled-components';
import PostBoxContainer from '../containers/PostBoxContainer';
import Layout from '../layouts/Layout';

const S = {};

S.Main = styled.main`
  background-color: #fffdf7;
  min-height: 100vh;
  max-width: 1600px;
  margin: 80px auto 0px auto;
`;

function Search({ isLoading, posts, query }) {
  return (
    <Layout>
      <S.Main>
        {!isLoading && posts && (
          <>
            <div>{`'${query}'에 대한 검색 결과 ${posts.length}개`}</div>
            <PostBoxContainer posts={posts} />
          </>
        )}
      </S.Main>
    </Layout>
  );
}

export default Search;
