import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../components/Logo';

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

S.Message = styled.div`
  font-size: 1.3rem;
  margin-bottom: 2rem;
`;

S.Form = styled.form`
  margin-bottom: 2rem;
`;

S.Tag = styled.div`
  margin-bottom: 1.5rem;
  font-size: 1.7rem;
`;

S.Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 1rem;
  margin-bottom: 1.7rem;
  border-radius: 0.5rem;
  border: 0.1rem solid black;
`;

S.CheckMessage = styled.div`
  margin-bottom: 2rem;
  color: red;
  font-size: 1.2rem;
  ${({ isSame }) => (isSame ? 'color: blue' : 'color: red')}
`;

S.JoinBtn = styled.button`
  margin-top: 1rem;
  width: 100%;
  height: 70px;
  background-color: #222021;
  color: white;
  font-size: 2rem;
`;

S.Link = styled(Link)`
  display: block;
  text-align: center;
  font-size: 1.7rem;
`;

function Join({
  userInfo,
  isSame,
  isFocus,
  isFocusNickname,
  existNickname,
  onSubmitUserInfo,
  onChange,
  onHandleBlur,
  onHandleFocus,
}) {
  return (
    <S.Section>
      <S.JoinContainer>
        <Logo margin={'0 0 2rem 1rem'} />
        <S.Message>* 표시는 필수 입력 항목입니다.</S.Message>
        <S.Form onSubmit={onSubmitUserInfo}>
          <S.Tag>이메일 *</S.Tag>
          <S.Input
            name="email"
            placeholder="이메일"
            type="email"
            value={userInfo.email}
            onChange={onChange}
            required
          />
          <S.Tag>별명 *</S.Tag>
          <S.Input
            name="nickname"
            placeholder="별명 (2~15자)"
            type="text"
            value={userInfo.nickname}
            onChange={onChange}
            onBlur={onHandleBlur}
            onFocus={onHandleFocus}
            minLength="2"
            required
          />
          {isFocusNickname && existNickname && (
            <S.CheckMessage>닉네임이 이미 존재합니다.</S.CheckMessage>
          )}
          <S.Tag>비밀번호 *</S.Tag>
          <S.Input
            name="password"
            placeholder="비밀번호 (4자 이상)"
            type="password"
            value={userInfo.password}
            onChange={onChange}
            required
            minLength="4"
          />
          <S.Tag>비밀번호 확인 *</S.Tag>
          <S.Input
            name="passwordCheck"
            placeholder="비밀번호 확인 (4자 이상)"
            type="password"
            value={userInfo.passwordCheck}
            onChange={onChange}
            required
            minLength="4"
          />
          {isFocus &&
            (isSame ? (
              <S.CheckMessage isSame={isSame}>
                비밀번호가 일치합니다.
              </S.CheckMessage>
            ) : (
              <S.CheckMessage isSame={isSame}>
                비밀번호가 불일치합니다.
              </S.CheckMessage>
            ))}

          <S.JoinBtn>회원가입 완료</S.JoinBtn>
        </S.Form>
        <S.Link to="/login">로그인 화면으로 가기</S.Link>
      </S.JoinContainer>
    </S.Section>
  );
}

export default Join;
