import React from 'react'
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import './signin-signup.scss';
const SigninSignUp = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default SigninSignUp
