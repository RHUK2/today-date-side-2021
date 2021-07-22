import { Link } from 'react-router-dom';
import styled from 'styled-components';

const S = {};

S.Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

S.LoginContainer = styled.div`
  width: 360px;
`;

S.Logo = styled.img`
  position: relative;
  left: 1rem;
  width: 100%;
  margin-bottom: 2rem;
`;

S.Form = styled.form`
  margin-bottom: 2rem;
`;

S.Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 2rem;
  border: 0.1rem solid black;
  :first-child {
    border-radius: 0.5rem 0.5rem 0 0;
    border-bottom: 0;
  }
  :nth-child(2) {
    border-radius: 0 0 0.5rem 0.5rem;
  }
`;

S.LoginBtn = styled.button`
  margin-top: 2rem;
  width: 100%;
  height: 70px;
  background-color: #222021;
  color: white;
  font-size: 2rem;
`;

S.Link = styled(Link)`
  display: block;
  text-align: center;
  font-size: 1.4rem;
`;

function Login({ onHandleChange, onLogin }) {
  return (
    <S.Section>
      <S.LoginContainer>
        <Link to="/">
          <S.Logo src={'/images/logo.png'} alt="" />
        </Link>
        <S.Form onSubmit={onLogin}>
          <S.Input
            name="email"
            placeholder="이메일"
            type="email"
            onChange={onHandleChange}
            required
          />
          <S.Input
            name="password"
            placeholder="비밀번호"
            type="password"
            onChange={onHandleChange}
            required
          />
          <S.LoginBtn>로그인</S.LoginBtn>
        </S.Form>
        <S.Link to="/join">회원가입 화면으로 가기</S.Link>
      </S.LoginContainer>
    </S.Section>
  );
}

export default Login;
