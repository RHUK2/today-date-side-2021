import styled from 'styled-components';

import Logo from '../components/Logo';
import NavContainer from '../containers/NavContainer';

const S = {};

S.Header = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 100;

  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #fcf4a3;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

S.HeaderContainer = styled.div`
  width: 100%;
  max-width: 1600px;
  padding: 0 2rem;

  display: grid;
  grid-template-columns: 250px minmax(200px, 800px) 250px;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
  gap: 2rem;
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

function Header() {
  return (
    <S.Header>
      <S.HeaderContainer>
        <Logo margin={'0.5rem 0 0 0'} />
        <S.SearchBox>
          <i className="fas fa-search"></i>
          <S.Input name="term" type="title" placeholder="장소 검색" />
        </S.SearchBox>
        <NavContainer />
      </S.HeaderContainer>
    </S.Header>
  );
}

export default Header;
