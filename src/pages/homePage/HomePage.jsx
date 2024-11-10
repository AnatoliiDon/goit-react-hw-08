import { useSelector } from 'react-redux';
import css from './homePage.module.css';
import { isLoggedIn, userName } from '../../redux/auth/selectors';

const HomePage = () => {
  const login = useSelector(isLoggedIn);
  const name = useSelector(userName);
  return login ? (
    <h1 className={css.title}>Welcome to your personal phonebook {name}</h1>
  ) : (
    <h1 className={css.title}>Welcome to Phonebook application</h1>
  );
};

export default HomePage;
