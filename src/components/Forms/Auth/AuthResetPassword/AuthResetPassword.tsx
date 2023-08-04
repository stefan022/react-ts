import React, { FormEvent, useRef } from 'react'
import { AuthField, AuthForm, AuthFormButton, AuthFormSwitch, AuthFormTitle, AuthOr } from '../../../../components'
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../../../firebase/config';
import { toast } from 'react-toastify';
import { Routes } from '../../../../router/Routes';
import { useNavigate } from 'react-router-dom';

export const AuthResetPassword = () => {
    const emailRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    const handleResetPassword = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        sendPasswordResetEmail(auth, emailRef.current!.value)
            .then(() => {
                toast.success("Check your email for a reset link");
                navigate(Routes.LOGIN);
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <AuthForm handleSubmit={handleResetPassword}>
            <AuthFormTitle title='Reset your Password'/>
            <AuthField
                inputId="resetPassword"
                inputRef={emailRef}
                placeholder="example@gmail.com"
                text='Email'
            />
            <AuthFormButton
                content='Send instructions'
            />
            <AuthOr/>
            <AuthFormSwitch
                question='Back to'
                route={Routes.LOGIN}
                page='Sign In'
            />
        </AuthForm>
    )
}

export default AuthResetPassword