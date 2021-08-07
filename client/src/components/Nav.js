import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Menu from './Menu';

const S = {};

S.Nav = styled.nav`
  position: relative;

  display: grid;
  grid-template-columns: ${({ isLoggedIn }) =>
    isLoggedIn ? 'repeat(2, max-content)' : 'repeat(3, max-content)'};
  justify-items: center;
  align-items: center;
  gap: 1.4rem;

  font-size: 1.8rem;
`;

S.MenuBtn = styled.button`
  font-size: 1.8rem;
  padding: 0.7rem 2rem 0.5rem;
  background-color: #222021;
  color: white;
`;

S.LogoutBtn = styled.div`
  cursor: pointer;
`;

function Nav({ isLoggedIn, isOpenMenu, onLogout, onMenuToggle }) {
  return (
    <S.Nav isLoggedIn={isLoggedIn}>
      {isLoggedIn ? (
        <S.LogoutBtn onClick={onLogout}>로그아웃</S.LogoutBtn>
      ) : (
        <>
          <Link to="/login">로그인</Link>
          <Link to="/join">회원가입</Link>
        </>
      )}
      <S.MenuBtn id="menuBtn" onClick={onMenuToggle}>
        메뉴
      </S.MenuBtn>
      {isOpenMenu && <Menu />}
    </S.Nav>
  );
}

export default Nav;
