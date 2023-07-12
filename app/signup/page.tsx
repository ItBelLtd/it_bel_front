'use client'
import { Metadata } from 'next';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { merriweather_sans } from '@/app/fonts';
import { roboto_mono } from '@/app/fonts'

import Button from '@/components/Button/Button';
import Link from 'next/link';
import styles from './signup.module.css'
export const metadata: Metadata = {
    title: 'IT_BEL | Sign up',
};

const Signup = () => {
    return (
        <div>

            <Formik
                initialValues={
                    {
                        surname: '',
                        name: '',
                        birthday: '',
                        password: '',
                        repeatedPassword: '',
                    }}

                onSubmit={(values) => {
                    console.log(JSON.stringify(values, null, 2));
                }}
            >
                {({ isSubmitting }) => (
                    <Form className={`${styles.form} + ${merriweather_sans.className}`}>
                        <h3 className={`${styles.title} + ${roboto_mono.className}`}>Регистрация</h3>
                        <Field type="text" name="surname" placeholder='Фамилия' className={styles.input} />
                        <ErrorMessage name="surname" component="div" />
                        <Field type="text" name="name" placeholder='Имя' className={styles.input} />
                        <ErrorMessage name="name" component="div" />
                        <Field type="text" name="birthday" placeholder='Дата рождения' className={styles.input} />
                        <ErrorMessage name="birthday" component="div" />
                        <Field type="password" name="password" placeholder='Придумайте пароль' className={styles.input} />
                        <ErrorMessage name="password" component="div" />
                        <Field type="password" name="repeatedPassword" placeholder='Повторите пароль' className={`${styles.input} ${styles.lastInput}`} />
                        <ErrorMessage name="password" component="div" />
                        <div className={styles.buttonWrap}>
                            <Button type='submit' text='Зарегестрироваться' disabled={isSubmitting} className={styles.signupButton} />
                            <Link href='' className={styles.link}>Есть аккаунт? Войти</Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
};

export default Signup;
