// react 최신 버전부터 import React 사용안함
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import GlobalStyles from './GlobalStyles';

import { loginCheckAction } from './reducers/userReducer';

import HomeContainer from './containers/HomeContainer';
import JoinContainer from './containers/JoinContainer';
import LoginContainer from './containers/LoginContainer';
import PostWriteContainer from './containers/PostWriteContainer';
import PostDetailContainer from './containers/PostDetailContainer';

import Loader from './components/Loader';

const PrivateRoute = ({ component: Component, ...parentProps }) => {
  const { isLoggedIn } = useSelector((state) => state.userReducer);
  return (
    <>
      <Route
        {...parentProps}
        render={(props) =>
          isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    </>
  );
};

const PublicRoute = ({ component: Component, ...parentProps }) => {
  const { isLoggedIn } = useSelector((state) => state.userReducer);
  return (
    <>
      <Route
        {...parentProps}
        render={(props) =>
          !isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    </>
  );
};

function App() {
  const { isLoading } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginCheckAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      {isLoading ? (
        <Loader />
      ) : (
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <PublicRoute path="/login" component={LoginContainer} />
          <PublicRoute path="/join" component={JoinContainer} />
          <PrivateRoute path="/post/write" component={PostWriteContainer} />
          <Route path="/post/:id" component={PostDetailContainer} />
          <Redirect from="*" to="/" />
        </Switch>
      )}
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
