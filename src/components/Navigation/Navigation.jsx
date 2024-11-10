import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { userName } from '../../redux/auth/selectors';
import { apiLogout } from '../../redux/auth/operations';

const Navigation = () => {
  const name = useSelector(userName);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(apiLogout());
  };
  const activeStyle = ({ isActive }) =>
    clsx(css.link, isActive && css.activeLink);
  return (
    <header className={css.header}>
      <NavLink className={activeStyle} to="/">
        Home
      </NavLink>
      <NavLink className={activeStyle} to="/contacts">
        Contacts
      </NavLink>
      <h3>Hello {name}</h3>
      <button type="button" onClick={onLogout}>
        LogOut
      </button>
    </header>
  );
};

export default Navigation;
