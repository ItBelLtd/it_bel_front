'use client';
import { Formik, Form, Field } from 'formik';
import { merriweather_sans} from '@/app/fonts';
import { SignupValues } from '@/models/Form';
import { useState } from 'react';
import Button from '@/components/Button/Button';
import Link from 'next/link';
import styles from './signup.module.css';

import { useAuth } from '@/app/stores/authStore';



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
  const { signup, email, password, nonField } = useAuth((state) => ({
    signup: state.signup,
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
          signup(values.user, 'users/');
          signup(values.author, 'authors/');
        } else {
          signup(values.user, 'users/');
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
