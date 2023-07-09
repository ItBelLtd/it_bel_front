'use client'
import { Button, Form, Input } from 'antd/es';
import Link from 'next/link';

const Signup = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <Form
                name="signup"
                style={{
                    maxWidth: '310px',
                    padding: '50px 20px 25px 20px',
                    margin: ' 0 auto',
                    backgroundColor: '#151515'
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <h3 style={{ color: 'white' }}>Регистрация</h3>
                <Form.Item
                    name="second name"
                    rules={[{ required: true, message: 'Пожалуйста введите свою фамилию!' }]}
                >
                    <Input placeholder='Фамилия' autoComplete='second name' />
                </Form.Item>
                <Form.Item
                    name="first name"
                    rules={[{ required: true, message: 'Пожалуйста введите свое имя!' }]}
                >
                    <Input placeholder='Имя' autoComplete='name' />
                </Form.Item>
                <Form.Item
                    name="birthday"
                    rules={[{ required: true, message: 'Пожалуйста введите свою дату рождения' }]}
                >
                    <Input placeholder='Дата рождения' autoComplete='date of birth' />
                </Form.Item>
                <Form.Item
                    name="Придумайте пароль"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password placeholder='Password' autoComplete='new-password' />
                </Form.Item>
                <Form.Item
                    name="Confirm the password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password placeholder='Повторите пароль' autoComplete='new-password' />
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Зарегестрироваться
                    </Button>
                </Form.Item>
                <Link href='' style={{ color: 'white' }}>Есть аккаунт? Войти</Link>
            </Form >
        </>
    )
}
export default Signup;