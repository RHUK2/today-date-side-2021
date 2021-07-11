// react 최신 버전부터 import React 사용안함
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import JoinContainer from './containers/JoinContainer';
import LoginContainer from './containers/LoginContainer';
import GlobalStyles from './GlobalStyles';

function App() {
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
