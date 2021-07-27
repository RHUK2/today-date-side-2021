import Layout from '../layouts/Layout';
import styled from 'styled-components';

const S = {};

S.Section = styled.section`
  background-color: teal;
  min-height: 100vh;
  max-width: 800px;
  margin: 80px auto 0px auto;
`;

S.Form = styled.form`
  display: flex;
  flex-direction: column;
`;

function PostWrite({ postInfo, onHandleChange, onHandleSubmit }) {
  return (
    <Layout>
      <S.Section>
        <S.Form onSubmit={onHandleSubmit}>
          <input
            onChange={onHandleChange}
            type="file"
            accept="image/*"
            multiple
            required
          />
          <input
            name="title"
            value={postInfo.title}
            onChange={onHandleChange}
            type="text"
            required
          />
          <textarea
            name="description"
            value={postInfo.description}
            onChange={onHandleChange}
            required
          ></textarea>
          <button>Submit</button>
        </S.Form>
      </S.Section>
    </Layout>
  );
}

export default PostWrite;
