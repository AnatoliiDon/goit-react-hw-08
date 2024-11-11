import Modal from 'react-modal';
import css from './editModal.module.css';
import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { apiEditContacts } from '../../redux/contacts/operations';

const regex = /^(?=.*?[1-9])[0-9()-]+$/;

const editProfileSchema = yup.object({
  name: yup
    .string()
    .min(3, 'name should have at least 3 symbols')
    .max(50, 'name should have less than 50 symbols')
    .required('Name is reqiered'),
  number: yup
    .string()
    .required('phone is reqiered')
    .min(3, 'too short!')
    .max(50, 'too long!')
    .matches(regex, 'enter valid number'),
});

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
