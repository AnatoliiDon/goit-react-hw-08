import css from './Contact.module.css';
import { useState } from 'react';
import ModalWindow from '../ModalWindow/ModalWindow';
import EditModal from '../EditModal/EditModal';
const Contact = ({ name, number, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  const openEditModal = () => {
    setIsOpenEdit(true);
  };
  const onEditClose = () => {
    setIsOpenEdit(false);
  };

  return (
    <div className={css.contactContainer}>
      <div className={css.contactData}>
        <p>🦸‍♂️ {name}</p>
        <p>📱{number}</p>
      </div>
      <div className={css.btnContainer}>
        <button type="button" className={css.contactBtn} onClick={openModal}>
          Delete
        </button>
        <button
          type="button"
          className={css.contactBtn}
          onClick={openEditModal}
        >
          Edit
        </button>
      </div>
      <ModalWindow isOpen={isOpen} id={id} onClose={onClose} />
      <EditModal isOpenEdit={isOpenEdit} id={id} onEditClose={onEditClose} />
    </div>
  );
};

export default Contact;
