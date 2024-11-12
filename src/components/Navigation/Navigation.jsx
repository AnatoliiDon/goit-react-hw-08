import { NavLink } from 'react-router-dom';
import css from './navigation.module.css';
import clsx from 'clsx';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const activeStyle = ({ isActive }) =>
    clsx(css.link, isActive && css.activeLink);
  const isLogin = useSelector(selectIsLoggedIn);
  return (
    <header className={css.header}>
      <div className={css.navigation}>
        <NavLink className={activeStyle} to="/">
          Home
        </NavLink>
        {isLogin && (
          <NavLink className={activeStyle} to="/contacts">
            Contacts
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Navigation;
