'use client'
import { Button, Form, Input } from 'antd/es';
import Link from 'next/link';

const Login = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <Form
                name="login"
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
                <h3 style={{ color: 'white' }}>С возвращением</h3>
                <Form.Item
                    name="Email"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input placeholder='Email' autoComplete='email' />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password placeholder='Password' autoComplete='new-password' />
                </Form.Item>
                <Link href='' style={{ color: 'white' }}>Забыли пароль?</Link>
                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Войти
                    </Button>
                </Form.Item>
                <Link href='' style={{ color: 'white' }}>Нет аккаунта? Зарегистрироваться</Link>
            </Form >
        </>
    )
}
export default Login;