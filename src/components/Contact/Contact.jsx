import { useDispatch } from 'react-redux';
import { apiDeleteContacts } from '../../redux/contactsOps';
import css from './Contact.module.css';
const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const onDeleteProfile = profileId => {
    dispatch(apiDeleteContacts(profileId));
  };

  return (
    <div className={css.contactContainer}>
      <div>
        <p>🦸‍♂️ {name}</p>
        <p>📱{number}</p>
      </div>
      <button
        type="button"
        className={css.contactBtn}
        onClick={() => onDeleteProfile(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
