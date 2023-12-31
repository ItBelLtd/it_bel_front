'use client';
import { Formik, Form, Field } from 'formik';
import { merriweather_sans, roboto_mono } from '@/app/fonts';
import { SigninValues } from '@/models/Form';
import { useAuth } from '../stores/authStore';
import { useRouter } from 'next/navigation';

import Button from '@/components/Button/Button';
import Link from 'next/link';
import styles from './signin.module.css';

const Signin = () => {
  const router = useRouter();
  const { signin, email, password, nonField } = useAuth((state) => ({
    signin: state.signin,
    email: state.errors?.email,
    password: state.errors?.password,
    nonField: state.errors?.non_field_errors,
  }));
  const initialValues: SigninValues = {
    email: '',
    password: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        signin('auth/token/login/', values).then((data) => {
          if (!data.errors) {
            router.push('/');
          }
        });
      }}
    >
      {({ isSubmitting }) => (
        <Form className={`${styles.form} + ${merriweather_sans.className}`}>
          <h3 className={`${styles.title} + ${roboto_mono.className}`}>
            С возвращением!
          </h3>
          <div>{nonField}</div>
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
            placeholder='Пароль'
            className={styles.input}
          />
          <div>{password}</div>
          <Link href='' className={styles.link}>
            Забыли пароль?
          </Link>
          <div className={styles.buttonWrap}>
            <Button
              type='submit'
              text='Войти'
              disabled={isSubmitting}
              className={styles.signinButton}
            />
            <Link href='' className={styles.link}>
              Нет аккаунта? Зарегистрироваться
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default Signin;
