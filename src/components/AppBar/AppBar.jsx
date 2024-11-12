import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import UserMenu from '../UserMenu/UserMenu';
import css from './AppBar.module.css';

export const AppBar = () => {
  const isLogin = useSelector(selectIsLoggedIn);
  return (
    <>
      <header className={css.header}>
        <Navigation />
        {isLogin ? <UserMenu /> : <AuthNav />}
      </header>
    </>
  );
};
