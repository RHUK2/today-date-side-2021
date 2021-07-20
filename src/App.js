// react 최신 버전부터 import React 사용안함
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { loginAction } from './reducers/loginStatusReducer';

import HomeContainer from './containers/HomeContainer';
import JoinContainer from './containers/JoinContainer';
import LoginContainer from './containers/LoginContainer';
import GlobalStyles from './GlobalStyles';

function App() {
  const dispatch = useDispatch();
  dispatch(loginAction());

  useEffect(() => {
    window.addEventListener('load', () => {
      dispatch(loginAction());
    });
    return () => {
      window.removeEventListener('load', () => {
        dispatch(loginAction());
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/join" component={JoinContainer} />
      </Switch>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
