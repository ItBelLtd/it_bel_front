'use client';
import { Metadata } from 'next';
import { Formik, Form, Field } from 'formik';
import { merriweather_sans, roboto_mono } from '@/app/fonts';
import { SignupValues } from '@/models/Form';
import { useState } from 'react';
import Button from '@/components/Button/Button';
import Link from 'next/link';
import styles from './signup.module.css';
export const metadata: Metadata = {
  title: 'IT_BEL | Sign up',
};

const Signup = () => {
  const initialValues: SignupValues = {
    userName: '',
    email: '',
    password: '',
  };
  const [allError, setAllError] = useState({ email: '', password: '' });
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          const response = await fetch('http://127.0.0.1/api/users/', {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          });
          try {
            if (!response.ok) {
              const errors = await response.json();
              if (errors) {
                setAllError(errors);
                console.log(allError);
              }
            }
            const data = await response.json();
            console.log(data.auth_token);
            return data;
          } catch (e) {
            console.log('Произошла ошибка');
          }
          // console.log(JSON.stringify(values, null, 2));
        }}
      >
        {({ isSubmitting }) => (
          <Form className={`${styles.form} + ${merriweather_sans.className}`}>
            <h3 className={`${styles.title} + ${roboto_mono.className}`}>
              Регистрация
            </h3>
            <Field
              type='text'
              name='userName'
              placeholder='Имя'
              className={styles.input}
            />
            <Field
              type='email'
              name='email'
              placeholder='Email'
              className={styles.input}
            />
            <div>{allError.email}</div>
            <Field
              type='password'
              name='password'
              placeholder='Придумайте пароль'
              className={`${styles.lastInput} ${styles.input}`}
            />
            <div>{allError.password}</div>
            <div className={styles.buttonWrap}>
              <Button
                type='submit'
                text='Зарегестрироваться'
                disabled={isSubmitting}
                className={styles.signupButton}
              />
              <Link href='' className={styles.link}>
                Есть аккаунт? Войти
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
