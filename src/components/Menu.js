import { Link } from 'react-router-dom';
import styled from 'styled-components';

const S = {};

S.MenuContainer = styled.ul`
  position: fixed;
  top: 7rem;
  right: 6rem;
  z-index: 101;

  width: 220px;

  background-color: #222021;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

S.Menu = styled.li`
  padding: 2.5rem 0;
  font-size: 2.5rem;

  :not(:last-child) {
    border-bottom: 1px solid white;
  }
`;

S.Link = styled(Link)`
  display: flex;
  justify-content: center;

  i {
    color: white;
  }
  div {
    color: white;
    margin-left: 2rem;
  }
`;

function Menu() {
  return (
    <S.MenuContainer>
      <S.Menu>
        <S.Link to="post/write">
          <i className="far fa-smile"></i>
          <div>마이페이지</div>
        </S.Link>
      </S.Menu>
      <S.Menu>
        <S.Link to="post/write">
          <i className="fas fa-pencil-alt"></i>
          <div>공유 글쓰기</div>
        </S.Link>
      </S.Menu>
    </S.MenuContainer>
  );
}

export default Menu;
