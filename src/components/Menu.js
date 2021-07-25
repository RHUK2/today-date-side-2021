import { forwardRef } from 'react';
import styled from 'styled-components';

const S = {};

S.MenuContainer = styled.ul`
  position: fixed;
  top: 7rem;
  right: 6rem;
  z-index: 101;

  width: 250px;

  background-color: #222021;
  border-radius: 0.5rem;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

S.Menu = styled.li`
  display: flex;
  justify-content: center;

  padding: 2.5rem;

  font-size: 2.5rem;

  :not(:last-child) {
    border-bottom: 1px solid white;
  }
  div {
    margin-left: 2rem;
  }
`;

function Menu(__, menuRef) {
  return (
    <S.MenuContainer ref={menuRef}>
      <S.Menu>
        <i className="far fa-smile"></i>
        <div>마이페이지</div>
      </S.Menu>
      <S.Menu>
        <i className="fas fa-pencil-alt"></i>
        <div>공유 글쓰기</div>
      </S.Menu>
    </S.MenuContainer>
  );
}

export default forwardRef(Menu);
