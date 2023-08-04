import React, { useRef, FormEvent } from "react";

import { Routes } from "../../../router/Routes";
import { AuthForm, AuthField, AuthFormButton, AuthFormSwitch, AuthFormTitle, AuthGoogleButton, AuthOr, AuthPassword, AuthResetPasswordSwitch } from "../../../components";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../firebase/config";
import { DocumentSnapshot, doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { clearAuthFormFields } from "../../../utils/helpers/clearAuthFormFields";

const SignIn = () => {
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);

	const navigate = useNavigate();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => { 
		e.preventDefault();

		signInWithEmailAndPassword(auth, emailRef.current!.value, passwordRef.current!.value)
            .then((userCredential) => {
				getDoc(doc(db, "users", userCredential.user.uid))
                	.then((user: DocumentSnapshot) => {
						localStorage.setItem("token", user.data()!.token);
						localStorage.setItem("userId", userCredential.user.uid); 
						toast.success("Login successfully");
						navigate(Routes.HOME);
					})
                	.catch(error => console.log(error));
            })
            .catch((error) => {
                toast.error("Invalid email address or password");
				clearAuthFormFields(emailRef, passwordRef);
            });
	 }

	return (
		<AuthForm handleSubmit={handleSubmit}>
            <AuthFormTitle title="Sign in to your account"/>
			<AuthField
				inputId="signInEmail"
				placeholder="example@gmail.com"
				text="Email"
				inputRef={emailRef}
			/>
			<AuthPassword
				inputId="signInPassword"
				inputRef={passwordRef}
			/>
			<AuthResetPasswordSwitch/>
			<AuthFormButton content="Sign In"/>
			<AuthFormSwitch 
				question="Don't have an account?"
				route={Routes.REGISTER}
				page="Sign Up"
			/>
            <AuthOr/>
            <AuthGoogleButton/>
		</AuthForm>
	)
};

export default SignIn;
