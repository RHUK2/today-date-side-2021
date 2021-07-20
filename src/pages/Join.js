import { Link } from 'react-router-dom';
import styled from 'styled-components';

const S = {};

S.Section = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

S.JoinContainer = styled.div`
  width: 360px;
  padding: 3rem 0;
`;

S.Logo = styled.img`
  width: 100%;
  height: 100px;
  background-color: darkblue;
  margin-bottom: 2rem;
`;

S.Message = styled.div`
  margin-bottom: 2rem;
`;

S.Form = styled.form`
  margin-bottom: 2rem;
`;

S.InputTitle = styled.div`
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`;

S.Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 0.5rem;
  border: 0.1rem solid black;
`;

S.InputMessage = styled.div`
  margin-bottom: 2rem;
  color: red;
  font-size: 1.2rem;
  ${({ isSame }) => (isSame ? 'color: blue' : 'color: red')}
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

function Join({ userInfo, isSame, isFocus, onJoin, onHandleChange }) {
  return (
    <S.Section>
      <S.JoinContainer>
        <S.Logo alt="" />
        <S.Message>* 표시는 필수 입력 항목입니다.</S.Message>
        <S.Form onSubmit={onJoin}>
          <S.InputTitle>이메일 *</S.InputTitle>
          <S.Input
            name="email"
            placeholder="이메일"
            type="email"
            value={userInfo.email}
            onChange={onHandleChange}
            required
          />
          <S.InputTitle>비밀번호 *</S.InputTitle>
          <S.Input
            name="password"
            placeholder="비밀번호 (4자 이상)"
            type="password"
            value={userInfo.password}
            onChange={onHandleChange}
            required
            minLength="4"
          />
          <S.InputTitle>비밀번호 확인 *</S.InputTitle>
          <S.Input
            name="passwordCheck"
            placeholder="비밀번호 확인 (4자 이상)"
            type="password"
            value={userInfo.passwordCheck}
            onChange={onHandleChange}
            required
            minLength="4"
          />
          {isFocus &&
            (isSame ? (
              <S.InputMessage isSame={isSame}>
                비밀번호가 일치합니다.
              </S.InputMessage>
            ) : (
              <S.InputMessage isSame={isSame}>
                비밀번호가 불일치합니다.
              </S.InputMessage>
            ))}
          <S.InputTitle>별명 *</S.InputTitle>
          <S.Input
            name="nickname"
            placeholder="별명 (2~15자)"
            type="text"
            value={userInfo.nickname}
            onChange={onHandleChange}
            required
          />
          <S.JoinBtn>회원가입 완료</S.JoinBtn>
        </S.Form>
        <S.Link to="/login">로그인 화면으로 가기</S.Link>
      </S.JoinContainer>
    </S.Section>
  );
}

export default Join;
