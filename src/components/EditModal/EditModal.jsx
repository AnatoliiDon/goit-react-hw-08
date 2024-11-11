import Modal from 'react-modal';
import css from './editModal.module.css';
import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { apiEditContacts } from '../../redux/contacts/operations';
import { editProfileSchema } from '../../util/schemas';

const initialValues = {
  name: '',
  number: '',
};

const EditModal = ({ isOpenEdit, onEditClose, id }) => {
  const dispatch = useDispatch();

  const onEditProfile = formData => {
    const userData = {
      ...formData,
      id: id,
    };
    dispatch(apiEditContacts(userData));
    onEditClose();
  };

  return (
    <Modal
      isOpen={isOpenEdit}
      ariaHideApp={false}
      overlayClassName={css.customOverlayStyles}
      className={css.customStyles}
      onRequestClose={onEditClose}
    >
      <button onClick={onEditClose} type="button" className={css.closeBtn}>
        ❌
      </button>
      <div className={css.modalContent}>
        <Formik
          initialValues={initialValues}
          onSubmit={onEditProfile}
          validationSchema={editProfileSchema}
        >
          <Form className={css.formField}>
            <label className={css.inputField}>
              <span className={css.inputTitle}>name</span>
              <Field
                className={css.inputArea}
                type="text"
                name="name"
                placeholder="Vasil Hmara"
              />
              <ErrorMessage
                className={css.errorMessage}
                name="name"
                component="span"
              />
            </label>

            <label className={css.inputField}>
              <span className={css.inputTitle}>number</span>
              <Field
                className={css.inputArea}
                type="text"
                name="number"
                placeholder="xxx-xx-xx"
              />
              <ErrorMessage
                className={css.errorMessage}
                name="number"
                component="span"
              />
            </label>
            <button type="submit" className={css.addBtn}>
              Edit
            </button>
          </Form>
        </Formik>
      </div>
    </Modal>
  );
};
export default EditModal;
