import { useSelector } from 'react-redux';
import Home from '../pages/Home';

function HomeContainer({ history }) {
  const { isLoggedIn } = useSelector((state) => state.userReducer);

  const onGoPost = () => {
    if (!isLoggedIn) {
      history.push('/login');
    } else {
      history.push('/post/write');
    }
  };

  return <Home onGoPost={onGoPost} />;
}

export default HomeContainer;
