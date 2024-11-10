import { useSelector } from 'react-redux';
import { isLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({ component, redirectTo = '/' }) => {
  const isUserLoggedIn = useSelector(isLoggedIn);
  return isUserLoggedIn ? <Navigate to={redirectTo} replace /> : component;
};

export default RestrictedRoute;
