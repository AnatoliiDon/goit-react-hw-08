import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contacts/slice';
import { selectContacts } from '../../redux/contacts/selectors';

const ContactList = () => {
  const filteredUsers = useSelector(selectFilteredContacts);
  const contacts = useSelector(selectContacts);

  return (
    <ul className={css.contactList}>
      {Array.isArray(contacts) && contacts.length === 0 && (
        <p>There are no contacts in your phonebook yet!</p>
      )}
      {Array.isArray(filteredUsers) &&
        filteredUsers.length === 0 &&
        contacts.length !== 0 && (
          <p>No contacts matching the query were found!</p>
        )}
      {Array.isArray(filteredUsers) &&
        filteredUsers.map(({ id, name, number }) => {
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
