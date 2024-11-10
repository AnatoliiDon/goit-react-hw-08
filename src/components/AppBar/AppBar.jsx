import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';

const isLogin = false;

export const AppBar = () => {
  return isLogin ? <Navigation /> : <AuthNav />;
};
