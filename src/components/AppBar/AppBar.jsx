import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { isLoggedIn } from '../../redux/auth/selectors';

export const AppBar = () => {
  const isLogin = useSelector(isLoggedIn);
  console.log(isLogin);
  return isLogin ? <Navigation /> : <AuthNav />;
};
