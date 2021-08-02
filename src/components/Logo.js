import { Link } from 'react-router-dom';
import styled from 'styled-components';

const S = {};

S.Logo = styled.img`
  /* position: relative; */
  /* left: 1rem; */

  width: 100%;
  margin: ${({ margin }) => margin};
`;

function Logo({ margin }) {
  return (
    <Link to="/">
      <S.Logo src={'/images/logo.png'} alt="" margin={margin} />
    </Link>
  );
}

export default Logo;
