import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserName } from '../../redux/auth/selectors';
import css from './homePage.module.css';

const HomePage = () => {
  const login = useSelector(selectIsLoggedIn);
  const name = useSelector(selectUserName);
  return login ? (
    <h1 className={css.title}>Welcome to your personal phonebook {name}</h1>
  ) : (
    <h1 className={css.title}>Welcome to Phonebook application</h1>
  );
};

export default HomePage;
