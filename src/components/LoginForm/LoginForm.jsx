import { ErrorMessage, Field, Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import css from './loginForm.module.css';
import { apiLoginUser } from '../../redux/auth/operations';
import toast from 'react-hot-toast';
import { loginProfileSchema } from '../../util/schemas';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const onLogin = (formData, actions) => {
    dispatch(apiLoginUser(formData))
      .unwrap()
      .then(() => {
        toast.success('You have successfully logged in');
        actions.resetForm();
      })
      .catch(() => {
        toast.error('Incorrect email or password');
      });
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
export default LoginForm;
