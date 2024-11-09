import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectContacts } from '../../redux/contactsSlice';
import { selectFilteredContacts } from '../../redux/contactsSlice';

const ContactList = () => {
  const filteredUsers = useSelector(selectFilteredContacts)
  return (
    <ul className={css.contactList}>
      {Array.isArray(filteredUsers) && filteredUsers.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <Contact id={id} name={name} number={number} />
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
