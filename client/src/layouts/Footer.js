import styled from 'styled-components';

const S = {};

S.Footer = styled.footer`
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: gray;
  font-size: 2rem;
  color: white;
`;

function Footer() {
  return <S.Footer>Made By RHU5</S.Footer>;
}

export default Footer;
