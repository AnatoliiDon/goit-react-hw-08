import { useSelector } from 'react-redux';
import { isLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component, redirectTo = '/login' }) => {
  const isUserLoggedIn = useSelector(isLoggedIn);
  return isUserLoggedIn ? component : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
