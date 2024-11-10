import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
// import { RegisterPage } from './pages/registerPage/RegisterPage';
// import { LoginPage } from './pages/loginPage/LoginPage';
// import { ContactsPage } from './pages/contactsPage/ConstactsPage';
// import { HomePage } from './pages/homePage/HomePage';
import { apiRefreshUser } from './redux/auth/operations';
import { isRefreshing } from './redux/auth/selectors';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';

const HomePage = lazy(() => import('./pages/homePage/HomePage'));
const RegisterPage = lazy(() => import('./pages/registerPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/loginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/contactsPage/ConstactsPage'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiRefreshUser());
  }, [dispatch]);

  const isRefresh = useSelector(isRefreshing);

  if (isRefresh) {
    return <h4>Loading...</h4>;
  }
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={<RestrictedRoute component={<RegisterPage />} />}
            />
            <Route
              path="/login"
              element={<RestrictedRoute component={<LoginPage />} />}
            />
            <Route
              path="/contacts"
              element={<PrivateRoute component={<ContactsPage />} />}
            />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
