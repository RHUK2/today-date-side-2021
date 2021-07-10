// react 최신 버전부터 import React 사용안함
import GlobalStyles from './GlobalStyles';
import HomeContainer from './containers/HomeContainer';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import { BrowserRouter, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <HomeContainer />
      </Switch>
      <Footer />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
