'use client';
import { Metadata } from 'next';
import { Formik, Form, Field } from 'formik';
import { merriweather_sans, roboto_mono } from '@/app/fonts';
import { SignupValues } from '@/models/Form';

import Button from '@/components/Button/Button';
import Link from 'next/link';
import styles from './signup.module.css';

import { useAuth } from '../store';
import { useState } from 'react';

export const metadata: Metadata = {
  title: '1',
};

const Signup = () => {
  const [check, setCheck] = useState(false);
  const initialValues: SignupValues = {
    user: {
      userName: '',
      email: '',
      password: '',
    },
    author: {
      name: '',
      surName: '',
      dateOfBirth: '',
    },
    toggle: false,
  };
  const { signin, email, password, nonField } = useAuth((state) => ({
    signin: state.signin,
    email: state.errors.email,
    password: state.errors.password,
    nonField: state.errors.non_field_errors,
  }));
  const authorLabels = (
    <>
      <Field
        type='text'
        name='author.name'
        placeholder='Имя'
        className={styles.input}
      />
      <Field
        type='text'
        name='author.surName'
        placeholder='Фамилия'
        className={styles.input}
      />
      <Field
        type='text'
        name='author.dateOfBirth'
        placeholder='Дата рождения'
        className={styles.input}
      />
    </>
  );
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        if (check) {
          signin(values.user, 'users/');
          signin(values.author, 'authors/');
        }else {
          signin(values.user, 'users/');
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className={`${styles.form} + ${merriweather_sans.className}`}>
          <Field
            type='text'
            name='user.userName'
            placeholder='Никнейм'
            className={styles.input}
          />
          <Field
            type='email'
            name='user.email'
            placeholder='Email'
            className={styles.input}
          />
          <div>{email}</div>
          <Field
            type='password'
            name='user.password'
            placeholder='Придумайте пароль'
            className={`${styles.lastInput} ${styles.input}`}
          />
          <div>{password}</div>
          <Field
            id='check'
            type='checkbox'
            name='toggle'
            onClick={() => setCheck((check) => !check)}
          />
          <label htmlFor='check'>Стать автором</label>
          {check ? authorLabels : null}
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
