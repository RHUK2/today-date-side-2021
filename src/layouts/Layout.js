import HeaderContainer from '../containers/HeaderContainer';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <>
      <HeaderContainer />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
