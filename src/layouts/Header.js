import styled from 'styled-components';

const HeaderTag = styled.header`
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

const ImgLogo = styled.img`
  grid-column: 1 / 2;
  width: 80%;
  height: 45px;
  background-color: darkblue;
`;

const NavLoginBox = styled.nav`
  width: 80%;
  grid-column: 3 / -1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Header() {
  return (
    <HeaderTag>
      <ImgLogo alt="" />
      <NavLoginBox>
        <i class="fas fa-search"></i>
        <a href="/">로그인</a>
        <a href="/">회원가입</a>
        <button>메뉴</button>
      </NavLoginBox>
    </HeaderTag>
  );
}

export default Header;
