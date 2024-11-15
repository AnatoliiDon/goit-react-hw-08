import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component, redirectTo = '/login' }) => {
  const isUserLoggedIn = useSelector(selectIsLoggedIn);
  return isUserLoggedIn ? component : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
