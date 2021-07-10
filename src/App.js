// react 최신 버전부터 import React 사용안함
import GlobalStyles from './GlobalStyles';
import HomeContainer from './containers/HomeContainer';
import Header from './layouts/Header';
import Footer from './layouts/Footer';

function App() {
  return (
    <>
      <Header />
      <HomeContainer />
      <Footer />
      <GlobalStyles />
    </>
  );
}

export default App;
