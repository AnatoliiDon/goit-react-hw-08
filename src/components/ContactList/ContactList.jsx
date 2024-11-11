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
        <h2 className={css.textStyles}>
          There are no contacts in your phonebook yet!
        </h2>
      )}
      {Array.isArray(filteredUsers) &&
        filteredUsers.length === 0 &&
        contacts.length !== 0 && (
          <h2 className={css.textStyles}>
            No contacts matching the query were found!
          </h2>
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
