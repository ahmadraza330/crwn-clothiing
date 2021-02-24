import React, { Component } from 'react';
import CustomButton from './CustomButton';
import FormInput from './FormInput';
import './signin.scss';

import {signInWithGoogle, auth} from '../firebase/firebase.utils';

 class SignIn extends Component {
     constructor(props) {
         super(props);
         this.state  = {
             email: '',
             password: ''
         }
     } 

     handleSubmit = async (e) => {
         e.preventDefault();

         const {email, password} = this.state;

         try {
             auth.signInWithEmailAndPassword(email, password);
             this.setState({
                email: "",
                password: ""
            });
         } catch(error) {
             console.error(error);
         }
        
     }

     handleChange = (e) => {
         const {name, value} = e.target;
         this.setState({
             [name]: value
         })
     }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Signin with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" id="email" name="email" value={this.state.email} handleChange={this.handleChange} label="email" required/>
                    <FormInput type="password" id="password" name="password" value={this.state.password} handleChange={this.handleChange} label="password" required/>
                    <div className="buttons">
                    <CustomButton type="submit" >Sign in </CustomButton>
                    <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn >Sign in with Google </CustomButton>
                    </div>
                </form>
                
            </div>
        )
    }
}
export default SignIn