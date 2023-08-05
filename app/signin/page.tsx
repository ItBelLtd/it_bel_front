'use client';
import { Metadata } from 'next';
import { Formik, Form, Field } from 'formik';
import { merriweather_sans, roboto_mono } from '@/app/fonts';
import Button from '@/components/Button/Button';
import Link from 'next/link';
import styles from './signin.module.css';
import { SigninValues } from '@/models/Form';
import { useState } from 'react';
import { useStore } from '../store';

export const metadata: Metadata = {
  title: 'IT_BEL | Sign in',
};

const Signin = () => {
  const { signin, email, password, nonField } = useStore((state) => ({
    signin: state.signin,
    email: state.errors.email,
    password: state.errors.password,
    nonField: state.errors.non_field_errors,
  }));
  const initialValues: SigninValues = {
    email: '',
    password: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, e) => {
        signin(values);
      }}
      // const response = await fetch('http://127.0.0.1/api/auth/token/login/', {
      //   method: 'POST',
      //   mode: 'cors',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(values),
      // });
      // try {
      //   if (!response.ok) {
      //     const errors = await response.json();
      //     if (errors) {
      //       setAllError(errors);
      //       console.log(allError);
      //     }
      //   }
      //   const data = await response.json();
      //   console.log(data.auth_token);
      //   return data;
      // } catch (e) {
      //   console.log('Произошла ошибка');
      // }
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
