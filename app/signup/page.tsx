'use client';
import { Formik, Form, Field } from 'formik';
import { merriweather_sans } from '@/app/fonts';
import { UserSignupValues } from '@/models/Form';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/stores/authStore';

import Button from '@/components/Button/Button';
import styles from './signup.module.css';

const Signup = () => {
  const router = useRouter();
  const UserInitialValues: UserSignupValues = {
    userName: '',
    email: '',
    password: '',
  };
  const { signup, email, password, signin } = useAuth((state) => ({
    signup: state.signup,
    email: state.errors?.email,
    password: state.errors?.password,
    signin: state.signin,
  }));
  return (
    <Formik
      initialValues={UserInitialValues}
      onSubmit={async (values) => {
        signup('users/', values).then((data) => {
          if (!data.errors) {
            signin('auth/token/login/', values);
            router.push('/');
          }
        });
      }}
    >
      {({ isSubmitting }) => (
        <Form className={`${styles.form} + ${merriweather_sans.className}`}>
          <Field
            type='text'
            name='userName'
            placeholder='Никнейм'
            className={styles.input}
          />
          <Field
            type='email'
            name='email'
            placeholder='Email'
            className={styles.input}
          />
          <div>{email}</div>
          <Field
            type='password'
            name='password'
            placeholder='Придумайте пароль'
            className={`${styles.lastInput} ${styles.input}`}
          />
          <div>{password}</div>
          <div className={styles.buttonWrap}>
            <Button
              type='submit'
              text='Зарегестрироваться'
              disabled={isSubmitting}
              className={styles.signupButton}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Signup;
