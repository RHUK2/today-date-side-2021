import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { logoutAction } from '../reducers/userReducer';
import { closeMenuAction, openMenuAction } from '../reducers/modalReducer';

import Header from '../layouts/Header';
import { useEffect } from 'react';

function HeaderContainer({ history }) {
  const { isLoggedIn } = useSelector((state) => state.userReducer);
  const { isOpenMenu } = useSelector((state) => state.modalReducer);
  const dispatch = useDispatch();

  const onClose = (e) => {
    if (e.target.id !== 'menuBtn') {
      dispatch(closeMenuAction());
    }
  };

  useEffect(() => {
    window.addEventListener('click', onClose);
    return () => {
      window.removeEventListener('click', onClose);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // 계속 이벤트 리스너를 추가시켜주고 있었음.. [] 빼먹어서

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
      isOpenMenu={isOpenMenu}
      onLogout={onLogout}
      onMenuToggle={onMenuToggle}
    />
  );
}

export default withRouter(HeaderContainer);
