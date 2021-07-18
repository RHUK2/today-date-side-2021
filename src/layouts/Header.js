import { Link } from 'react-router-dom';
import styled from 'styled-components';

const S = {};

S.Header = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  background-color: beige;
  height: 60px;
  display: grid;
  grid-template-columns: 160px 1fr 220px;
  align-items: center;
  justify-items: center;
`;

S.Logo = styled.img`
  grid-column: 1 / 2;
  width: 80%;
  height: 45px;
  background-color: darkblue;
`;

S.Nav = styled.nav`
  width: 80%;
  grid-column: 3 / -1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Header({ isLoggedIn, onHandleClick }) {
  return (
    <S.Header>
      <S.Logo alt="" />
      <S.Nav>
        <i class="fas fa-search"></i>
        <Link to="/login">로그인</Link>
        <Link to="/join">회원가입</Link>
        <button>메뉴</button>
        {isLoggedIn ? <button onClick={onHandleClick}>로그아웃</button> : null}
      </S.Nav>
    </S.Header>
  );
}

export default Header;
