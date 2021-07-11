import { Link } from 'react-router-dom';
import styled from 'styled-components';

const S = {};

S.Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

S.JoinContainer = styled.div`
  width: 360px;
`;

S.Logo = styled.img`
  width: 100%;
  height: 100px;
  background-color: darkblue;
  margin-bottom: 2rem;
`;

S.Form = styled.form`
  margin-bottom: 2rem;
`;

S.InputTitle = styled.span`
  display: block;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

S.Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  border: 0.1rem solid black;
`;

S.JoinBtn = styled.button`
  margin-top: 1rem;
  width: 100%;
  height: 70px;
  background-color: #35c5f0;
  color: white;
  font-size: 2rem;
`;

S.Link = styled(Link)`
  display: block;
  text-align: center;
  font-size: 1.4rem;
`;

function Join() {
  return (
    <S.Section>
      <S.JoinContainer>
        <S.Logo alt="" />
        <S.Form>
          <S.InputTitle>이메일:</S.InputTitle>
          <S.Input placeholder="이메일" type="email" />
          <S.InputTitle>비밀번호:</S.InputTitle>
          <S.Input placeholder="비밀번호" type="password" />
          <S.InputTitle>비밀번호 확인:</S.InputTitle>
          <S.Input placeholder="비밀번호 확인" type="password" />
          <S.InputTitle>별명:</S.InputTitle>
          <S.Input placeholder="별명 (2~15자)" type="text" />
          <S.JoinBtn>회원가입 완료</S.JoinBtn>
        </S.Form>
        <S.Link to="/login">로그인 화면으로 가기</S.Link>
      </S.JoinContainer>
    </S.Section>
  );
}

export default Join;
