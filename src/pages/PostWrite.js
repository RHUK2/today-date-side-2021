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

S.Label = styled.label`
  display: block;
  width: 150px;
  padding: 1rem;

  background-color: #222021;
  border-radius: 0.5rem;
  text-align: center;
  font-size: 2rem;
  color: white;
  cursor: pointer;
`;

S.FileBox = styled.div`
  position: relative;
`;

S.InputFile = styled.input`
  // display: "none", visibility: "hidden" 으로 하면 유효성 검사 안되는 에러
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  opacity: 0;
  width: 150px;
  height: 40px;
`;

S.previewBox = styled.div`
  padding-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 1rem;
`;

S.Preview = styled.img`
  width: 100%;
  height: 200px;

  object-fit: contain;
  border: 1px solid black;
  background-color: whitesmoke;
  border-radius: 0.5rem;
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

function PostWrite({ postInfo, onHandleChange, onHandleSubmit }) {
  return (
    <Layout>
      <S.Section>
        <S.Title>공유 글쓰기</S.Title>
        <S.Form onSubmit={onHandleSubmit}>
          <S.InputTitle
            name="title"
            value={postInfo.title}
            onChange={onHandleChange}
            type="text"
            placeholder="제목"
            required
          />
          <S.Select selected name="area" onChange={onHandleChange}>
            <option>서울</option>
            <option>부산</option>
            <option>제주도</option>
            <option>강원도</option>
            <option>경기도</option>
            <option>인천</option>
            <option>경상도</option>
            <option>전라도</option>
            <option>충청도</option>
          </S.Select>
          <S.FileBox>
            <S.Label htmlFor="input-file">이미지 업로드</S.Label>
            <S.InputFile
              id="input-file"
              onChange={onHandleChange}
              type="file"
              accept="image/*"
              multiple
              required
            />
            <S.previewBox>
              {postInfo.previewImg &&
                postInfo.previewImg.map((img, idx) => (
                  <S.Preview key={idx} src={img} alt="" />
                ))}
            </S.previewBox>
          </S.FileBox>
          <S.TextArea
            name="description"
            value={postInfo.description}
            onChange={onHandleChange}
            placeholder="내용"
            required
          ></S.TextArea>
          <S.ShareBtn>공유하기</S.ShareBtn>
        </S.Form>
      </S.Section>
    </Layout>
  );
}

export default PostWrite;
