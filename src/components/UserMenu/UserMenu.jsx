import { useDispatch } from 'react-redux';

import css from './userMenu.module.css';
import { apiLogout } from '../../redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(apiLogout());
  };
  return (
    <>
      <button type="button" onClick={onLogout} className={css.logoutBtn}>
        LogOut
      </button>
    </>
  );
};

export default UserMenu;
