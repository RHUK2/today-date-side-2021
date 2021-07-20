import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { reqGetLogout } from '../api/apiCall';
import Header from '../layouts/Header';
import { loginAction } from '../reducers/loginStatusReducer';

function HeaderContainer({ history }) {
  const { isLoggedIn } = useSelector((state) => state.loginStatusReducer);
  const dispatch = useDispatch();

  const onLogout = async (e) => {
    try {
      await reqGetLogout();
      dispatch(loginAction());
      history.push('/');
    } catch (err) {
      console.log('Logout Error 🚫', err);
    }
  };

  return <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />;
}

export default withRouter(HeaderContainer);
