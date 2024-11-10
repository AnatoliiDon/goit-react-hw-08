import { useDispatch } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import { useEffect } from 'react';
import { apiGetContacts } from '../../redux/contacts/operations';
import SearchBox from '../../components/SearchBox/SearchBox';
const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);
  return (
    <div>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
