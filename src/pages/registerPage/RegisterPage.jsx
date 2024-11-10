import { ErrorMessage, Field, Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import css from './registerPage.module.css';

const initialValues = {
  name: '',
  number: '',
  email: '',
};
const regex = /^(?=.*?[1-9])[0-9()-]+$/;

const registrationProfileSchema = yup.object({
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

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const onRegistration = (formData, actions) => {
    actions.resetForm();
    dispatch(apiRegistration(formData));
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onRegistration}
      validationSchema={registrationProfileSchema}
    >
      <Form className={css.formField}>
        <label className={css.inputField}>
          <span className={css.inputTitle}>Name</span>
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
          <span className={css.inputTitle}>Email</span>
          <Field
            className={css.inputArea}
            type="text"
            name="email"
            placeholder="example@gmail.com"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="email"
            component="span"
          />
        </label>

        <label className={css.inputField}>
          <span className={css.inputTitle}>Password</span>
          <Field
            className={css.inputArea}
            type="text"
            name="password"
            placeholder="**********"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="password"
            component="span"
          />
        </label>
        <button type="submit" className={css.addBtn}>
          Registration
        </button>
      </Form>
    </Formik>
  );
};
