import Modal from 'react-modal';
import css from './modalWindow.module.css';
import { useDispatch } from 'react-redux';
import { apiDeleteContacts } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';

const ModalWindow = ({ isOpen, onClose, id }) => {
  const dispatch = useDispatch();
  const onDeleteProfile = profileId => {
    dispatch(apiDeleteContacts(profileId))
      .unwrap()
      .then(() => {
        toast.success('Contact deleted');
      })
      .catch(() => {
        toast.error('Something went wrong');
      });
  };
  return (
    <Modal
      isOpen={isOpen}
      ariaHideApp={false}
      overlayClassName={css.customOverlayStyles}
      className={css.customStyles}
      onRequestClose={onClose}
    >
      <button onClick={onClose} type="button" className={css.closeBtn}>
        ❌
      </button>
      <div className={css.modalContent}>
        <p className={css.modalText}>Are you sure?</p>
        <div className={css.btnWrapper}>
          <button type="button" onClick={() => onDeleteProfile(id)}>
            Yes
          </button>
          <button type="button" onClick={onClose}>
            No
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalWindow;
