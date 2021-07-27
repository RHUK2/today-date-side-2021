import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { logoutAction } from '../reducers/userReducer';
import { closeMenuAction, openMenuAction } from '../reducers/modalReducer';

import Header from '../layouts/Header';

function HeaderContainer({ history }) {
  const { isLoggedIn } = useSelector((state) => state.userReducer);
  const { isOpenMenu } = useSelector((state) => state.modalReducer);
  const dispatch = useDispatch();

  const onLogout = async (e) => {
    try {
      dispatch(logoutAction());
      history.push('/');
    } catch (err) {
      console.log('Logout Error 🚫', err);
    }
  };

  const onMenuToggle = () => {
    if (!isLoggedIn) {
      history.push('/login');
      return;
    }
    if (isOpenMenu) {
      dispatch(closeMenuAction());
    } else {
      dispatch(openMenuAction());
    }
  };

  return (
    <Header
      isLoggedIn={isLoggedIn}
      onLogout={onLogout}
      onMenuToggle={onMenuToggle}
    />
  );
}

export default withRouter(HeaderContainer);
