import { NavLink } from 'react-router-dom';
import css from './authNav.module.css';
import clsx from 'clsx';

const AuthNav = () => {
  const activeStyle = ({ isActive }) =>
    clsx(css.link, isActive && css.activeLink);

  return (
    <header className={css.header}>
      <NavLink className={activeStyle} to="/">
        Home
      </NavLink>
      <div className={css.navWrapper}>
        <NavLink className={activeStyle} to="/register">
          Register
        </NavLink>
        <NavLink className={activeStyle} to="/login">
          Login
        </NavLink>
      </div>
    </header>
  );
};

export default AuthNav;
