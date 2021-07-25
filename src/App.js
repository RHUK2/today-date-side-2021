// react 최신 버전부터 import React 사용안함
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { loginCheckAction } from './reducers/userReducer';
import { closeMenuAction } from './reducers/modalReducer';

import HomeContainer from './containers/HomeContainer';
import JoinContainer from './containers/JoinContainer';
import LoginContainer from './containers/LoginContainer';

import Loader from './components/Loader';
import Menu from './components/Menu';

import GlobalStyles from './GlobalStyles';

function App() {
  const { isLoading } = useSelector((state) => state.userReducer);
  const { isOpenMenu } = useSelector((state) => state.modalReducer);
  const dispatch = useDispatch();
  const menuRef = useRef();

  useEffect(() => {
    dispatch(loginCheckAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClose = (e) => {
    if (
      e.target.id !== 'menuBtn' &&
      menuRef.current &&
      !menuRef.current.contains(e.target)
    ) {
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

  return (
    <BrowserRouter>
      {isLoading && <Loader />}
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/join" component={JoinContainer} />
      </Switch>
      {isOpenMenu && <Menu ref={menuRef} />}
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
