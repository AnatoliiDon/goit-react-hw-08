import { ErrorMessage, Field, Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import css from './registerPage.module.css';
import { apiRegistration } from '../../redux/auth/operations';

const INITIAL_VALUES = {
  name: '',
  email: '',
  password: '',
};

const registrationProfileSchema = yup.object({
  name: yup
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(20, 'Name must be less than 20 characters')
    .required('Name is required'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password length must be at least 8 characters')
    .required('Password is required'),
});

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const onRegistrationSubmit = (values, actions) => {
    dispatch(apiRegistration(values));
    console.log(values);
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={onRegistrationSubmit}
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
              type="password"
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
    </div>
  );
};
