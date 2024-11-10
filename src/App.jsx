import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { apiGetContacts } from './redux/contacts/operations';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { RegisterPage } from './pages/registerPage/RegisterPage';
import { LoginPage } from './pages/loginPage/LoginPage';
import { ContactsPage } from './pages/contactsPage/ConstactsPage';
import { HomePage } from './pages/homePage/HomePage';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
