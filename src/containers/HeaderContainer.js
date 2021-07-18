import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { reqGetLogout } from '../api/apiCall';
import Header from '../layouts/Header';
import { logoutSuccess } from '../reducers/loginStatusReducer';

function HeaderContainer({ history }) {
  const { isLoggedIn } = useSelector((state) => state.loginStatusReducer);
  const dispatch = useDispatch();
  const onHandleClick = async (e) => {
    try {
      const response = await reqGetLogout();
      dispatch(logoutSuccess());
      console.log(response);
      history.push('/');
    } catch (err) {
      console.log('logout Error 🚫 ', err);
    }
  };

  return <Header isLoggedIn={isLoggedIn} onHandleClick={onHandleClick} />;
}

export default withRouter(HeaderContainer);
