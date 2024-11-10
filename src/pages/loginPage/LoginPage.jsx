import { ErrorMessage, Field, Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import css from './loginPage.module.css';
import { apiLoginUser } from '../../redux/auth/operations';

const initialValues = {
  email: '',
  password: '',
};
const regex = /^(?=.*?[1-9])[0-9()-]+$/;

const loginProfileSchema = yup.object({
  email: yup
    .string()
    .min(3, 'name should have at least 3 symbols')
    .max(50, 'name should have less than 50 symbols')
    .required('Email is reqiered'),
  password: yup
    .string()
    .required('password is reqiered')
    .min(8, 'too short!')
    .matches(regex, 'password is wrong'),
});

export const LoginPage = () => {
  const dispatch = useDispatch();
  const onLogin = (formData, actions) => {
    actions.resetForm();
    dispatch(apiLoginUser(formData));
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onLogin}
      validationSchema={loginProfileSchema}
    >
      <Form className={css.formField}>
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
            placeholder="*********"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="password"
            component="span"
          />
        </label>
        <button type="submit" className={css.addBtn}>
          Login
        </button>
      </Form>
    </Formik>
  );
};
