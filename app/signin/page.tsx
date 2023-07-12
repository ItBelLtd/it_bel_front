'use client'
import { Metadata } from 'next';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { merriweather_sans } from '@/app/fonts';
import { roboto_mono } from '@/app/fonts'

import Button from '@/components/Button/Button';
import Link from 'next/link';
import styles from './signin.module.css'

export const metadata: Metadata = {
	title: 'IT_BEL | Sign in',
};

const Signin = () => {
	return (
		
			<Formik
				initialValues={
					{
						email: '',
						password: ''
					}}
				onSubmit={(values) => {
					console.log(JSON.stringify(values, null, 2));
				}}
			>
				{({ isSubmitting }) => (
					<Form className={`${styles.form} + ${merriweather_sans.className}`}>
						<h3 className={`${styles.title} + ${roboto_mono.className}`}>С возвращением!</h3>
						<Field type="email" name="email" placeholder='Email' className={styles.input} />
						<ErrorMessage name="email" component="div" />
						<Field type="password" name="password" placeholder='Пароль' className={styles.input} />
						<ErrorMessage name="password" component="div" />
						<Link href='' className={styles.link}>Забыли пароль?</Link>
						<div className={styles.buttonWrap}>
							<Button type='submit' text='Войти' disabled={isSubmitting} className={styles.signinButton} />
							<Link href='' className={styles.link}>Нет аккаунта? Зарегистрироваться</Link>
						</div>
					</Form>
				)}
			</Formik>
		
	);
}
export default Signin;