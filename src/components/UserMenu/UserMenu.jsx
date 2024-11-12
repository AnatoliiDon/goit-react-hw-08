import { useDispatch, useSelector } from 'react-redux';

import css from './userMenu.module.css';
import { apiLogout } from '../../redux/auth/operations';
import { selectUserName } from '../../redux/auth/selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(apiLogout());
  };
  const name = useSelector(selectUserName);
  return (
    <div className={css.container}>
      <h3 className={css.welcomeMessage}>Welcome, {name}</h3>
      <button type="button" onClick={onLogout} className={css.logoutBtn}>
        LogOut
      </button>
    </div>
  );
};

export default UserMenu;
