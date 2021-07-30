import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Menu from '../components/Menu';

const S = {};

S.Header = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 100;

  display: grid;
  grid-template-columns: 250px minmax(200px, 1000px) 250px;
  justify-content: center;
  align-items: center;
  justify-items: center;
  gap: 2rem;

  width: 100%;
  height: 80px;
  padding: 0 5rem;

  background-color: #fcf4a3;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

S.Logo = styled.img`
  width: 100%;
  position: relative;
  top: 0.3rem;
  cursor: pointer;
`;

S.SearchBox = styled.div`
  width: 100%;
  position: relative;
  i {
    position: absolute;
    top: 1.3rem;
    left: 1.2rem;
    font-size: 1.6rem;
    color: white;
  }
`;

S.Input = styled.input`
  padding: 1rem 4rem 0.8rem;
  width: 100%;
  font-size: 1.8rem;
  color: white;
  background-color: #222021;
`;

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

function Header({ isLoggedIn, isOpenMenu, onLogout, onMenuToggle }) {
  return (
    <S.Header>
      <Link to="/">
        <S.Logo src={'/images/logo.png'} alt="" />
      </Link>
      <S.SearchBox>
        <i className="fas fa-search"></i>
        <S.Input name="term" type="title" placeholder="장소 검색" />
      </S.SearchBox>
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
    </S.Header>
  );
}

export default Header;
