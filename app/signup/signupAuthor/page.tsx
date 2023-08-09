'use client';
import { Metadata } from 'next';
import { Formik, Form, Field } from 'formik';
import { merriweather_sans, roboto_mono } from '@/app/fonts';
import { SignupAuthorValues } from '@/models/Form';

import Button from '@/components/Button/Button';
import Link from 'next/link';
import styles from '../signup.module.css';

import { useAuth } from '@/app/stores/authStore';

export const metadata: Metadata = {
  title: 'IT_BEL | Sign up',
};

const Signup = () => {
  const initialValues: SignupAuthorValues = {
    name: '',
    surName: '',
    dateOfBirth: '',
    email: '',
    password: '',
  };
  const { signup, email, password, nonField } = useAuth((state) => ({
    signup: state.signin,
    email: state.errors.email,
    password: state.errors.password,
    nonField: state.errors.non_field_errors,
  }));
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => signup(values,'authors/')}
    >
      {({ isSubmitting }) => (
        <Form className={`${styles.form} + ${merriweather_sans.className}`}>
          <Field
            type='text'
            name='name'
            placeholder='Имя'
            className={styles.input}
          />
          <Field
            type='text'
            name='surName'
            placeholder='Фамилия'
            className={styles.input}
          />
          <Field
            type='text'
            name='dateOfBirth'
            placeholder='Дата рождения'
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
