// react 최신 버전부터 import React 사용안함
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { loginCheckAction } from './reducers/userReducer';

import HomeContainer from './containers/HomeContainer';
import JoinContainer from './containers/JoinContainer';
import LoginContainer from './containers/LoginContainer';

import Loader from './components/Loader';

import GlobalStyles from './GlobalStyles';

function App() {
  const { isLoading } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loginCheckAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      {isLoading && <Loader />}
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
