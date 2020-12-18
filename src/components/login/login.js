import React, { Component } from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import {auth, signInWithGoogle} from '../../firebase/firebase';

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
        this.setState({[name]: value });
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch(error) {
            console.error(error);
        }

        
    }

    render() {
        const {email, password} = this.state;
        return(
            <div className='login'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign In with your email and password.</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={email}
                        handleChange={this.handleChange} 
                        label='Email'
                        required 
                    />
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={password} 
                        handleChange={this.handleChange}
                        label='Password' 
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