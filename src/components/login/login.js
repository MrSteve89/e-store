import React, { Component } from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import {signInWithGoogle} from '../../firebase/firebase';

import './login.scss';


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        } 
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email: '', password: ''})
    }

    render() {
        return(
            <div className='login'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password.</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email}
                        handleChange={this.handleChange} 
                        label='email'
                        required 
                    />
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label='password' 
                        required 
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>Login</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleLogin>Login with Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }



}

export default Login;