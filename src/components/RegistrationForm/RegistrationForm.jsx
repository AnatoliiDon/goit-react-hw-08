import { ErrorMessage, Field, Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import css from './registrationForm.module.css';
import { apiRegistration } from '../../redux/auth/operations';
import toast from 'react-hot-toast';
import { registrationProfileSchema } from '../../util/schemas';

const INITIAL_VALUES = {
  name: '',
  email: '',
  password: '',
};

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const onRegistrationSubmit = (values, actions) => {
    dispatch(apiRegistration(values))
      .unwrap()
      .then(() => {
        toast.success('You have been registrated');
        actions.resetForm();
      })

      .catch(() => {
        toast.error('Name or Email is already used');
      });
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
          <button type="submit" className={css.registerBtn}>
            Registration
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default RegistrationForm;
