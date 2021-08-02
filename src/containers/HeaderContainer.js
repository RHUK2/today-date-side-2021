import { withRouter } from 'react-router-dom';
import Header from '../layouts/Header';

function HeaderContainer() {
  return <Header />;
}

export default withRouter(HeaderContainer);
