import React from 'react';
import Login from '../../components/login/login';

import './login-register.scss';

const LoginRegister = () => {
    return (
        <div className='login-register'>
            Login and Register
            <Login />
        </div>
    );
}

export default LoginRegister;