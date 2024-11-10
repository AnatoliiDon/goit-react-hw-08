import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { apiLogout } from '../../redux/auth/operations';

const Navigation = () => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(apiLogout());
  };
  const activeStyle = ({ isActive }) =>
    clsx(css.link, isActive && css.activeLink);
  return (
    <header className={css.header}>
      <div className={css.navigation}>
        <NavLink className={activeStyle} to="/">
          Home
        </NavLink>
        <NavLink className={activeStyle} to="/contacts">
          Contacts
        </NavLink>
      </div>
      <div className={css.greeting}>
        <button type="button" onClick={onLogout} className={css.logoutBtn}>
          LogOut
        </button>
      </div>
    </header>
  );
};

export default Navigation;
