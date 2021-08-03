import Layout from '../layouts/Layout';
import styled from 'styled-components';

const S = {};

S.Section = styled.section`
  min-height: 100vh;
  max-width: 800px;
  margin: 80px auto 0px auto;
  padding: 5rem 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

S.Title = styled.h1`
  align-self: flex-start;
  margin-bottom: 3rem;

  font-size: 5rem;
`;

S.Form = styled.form`
  width: 100%;

  display: grid;
  grid-template-rows: repeat(6, max-content);
  gap: 2rem;
`;

S.InputTitle = styled.input`
  padding: 1rem 1rem 0.8rem;

  border: 1px solid black;
  font-size: 2rem;
`;

S.Select = styled.select`
  width: 120px;
  padding: 0.7rem 0.7rem 0.5rem;

  border: 1px solid black;
  font-size: 1.5rem;
`;

S.TextArea = styled.textarea`
  border: 1px solid black;
  padding: 1rem;
  height: 400px;
  font-size: 1.5rem;
`;

S.ShareBtn = styled.button`
  padding: 2rem 0;
  background-color: #222021;
  color: white;
  font-size: 2.5rem;
`;

function PostEdit({ postInfo, onHandleChange, onHandleSubmit }) {
  return (
    <Layout>
      <S.Section>
        <S.Title>수정하기</S.Title>
        <S.Form onSubmit={onHandleSubmit}>
          <S.InputTitle
            name="title"
            value={postInfo.title}
            onChange={onHandleChange}
            type="text"
            placeholder="제목"
            required
          />
          <S.Select
            value={postInfo.area}
            name="area"
            onChange={onHandleChange}
            required
          >
            <option value="">위치</option>
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
          <S.TextArea
            name="description"
            value={postInfo.description}
            onChange={onHandleChange}
            placeholder="내용"
            required
          ></S.TextArea>
          <S.ShareBtn>수정 완료</S.ShareBtn>
        </S.Form>
      </S.Section>
    </Layout>
  );
}

export default PostEdit;
