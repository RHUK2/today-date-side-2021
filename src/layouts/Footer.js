import styled from 'styled-components';

const S = {};

S.Footer = styled.footer`
  background-color: darkgray;
  height: 200px;
`;

function Footer() {
  return <S.Footer></S.Footer>;
}

export default Footer;
