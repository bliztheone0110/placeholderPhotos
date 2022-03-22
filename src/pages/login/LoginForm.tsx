import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import { rules } from './../../utils/rules';
import { useTypedSelector } from './../../hooks/useTypedSelector';
import { useActions } from './../../hooks/useActions';
import c from './login.module.css'

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { error, isLoading } = useTypedSelector(state => state.authReducer)
    const { login } = useActions()

    const submit = () => {
        login(username, password)
    }

    return (
        <div className={c.form_wrapper}>
            <Form onFinish={submit}>
                {error &&
                    <div style={{ color: 'red' }}>{error}</div>
                }
                <Form.Item
                    label="Login"
                    name="username"
                    rules={[rules.required('введите логин')]}
                >
                    <Input value={username} onChange={e => setUsername(e.target.value)} />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[rules.required('введите пароль')]}
                >
                    <Input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </Form.Item>
                <Form.Item style={{ marginBottom: '0' }}>
                    <Button type="primary" htmlType='submit' loading={isLoading}>войти</Button>
                </Form.Item>
                <p>Please use: user / 123</p>
            </Form>
        </div>
    );
};

export default LoginForm;