import { Row } from 'antd';
import React from 'react';
import LoginForm from './LoginForm';

const Login = () => {
    return (
        <div>
            <Row justify='center' align="middle" className='h100'>
                <LoginForm />
            </Row>
        </div>
    );
};

export default Login;