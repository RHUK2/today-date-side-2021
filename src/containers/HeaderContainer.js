import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { logoutAction } from '../reducers/userReducer';

import Header from '../layouts/Header';

function HeaderContainer({ history }) {
  const { isLoggedIn } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const onLogout = async (e) => {
    try {
      dispatch(logoutAction());
      history.push('/');
    } catch (err) {
      console.log('Logout Error 🚫', err);
    }
  };

  return <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />;
}

export default withRouter(HeaderContainer);
