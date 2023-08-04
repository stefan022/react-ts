import React from "react";

import { AuthForm, AuthFormButton, FormikField, FormPassword, AuthFormSwitch, AuthFormTitle } from "../../../components";
import { initialValues } from "../../../constants/initialValues";
import { validationSchema } from "../../../utils/validationSchema";
import { useFormik } from "formik";
import { Routes } from "../../../router/Routes";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../firebase/config";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const SignUp = () => {
    const navigate = useNavigate();

	const { handleSubmit, values, handleChange, handleBlur, touched, errors } = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            const { username, email, password } = values;
			
			createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                toast.success("Register successfully");
				navigate(Routes.LOGIN);

				userCredential.user.getIdToken().then((token) => {
					setDoc(doc(db, "users", userCredential.user.uid), {
						username,
						email,
						token
					})
				});
            })
            .catch((error) => {
                toast.error(error.message);
            });
        }
    });

	return (
		<AuthForm handleSubmit={handleSubmit}>
            <AuthFormTitle title="Sign up to your account"/>
            <FormikField
                inputId="username"
				text="Username:"
				placeholder="eliot404"
				value={values.username}
                error={errors.username}
                touched={touched.username}
                handleChange={handleChange}
                handleBlur={handleBlur}
            />
            <FormikField
                inputId="email"
				text="Email:"
				placeholder="stefan@gmail.com"
				value={values.email}
                error={errors.email}
                touched={touched.email}
                handleChange={handleChange}
                handleBlur={handleBlur}
            />
			<FormPassword
                inputId="password"
                value={values.password}
                error={errors.password}
                touched={touched.password}
                handleChange={handleChange}
                handleBlur={handleBlur}
            />
            <AuthFormButton content="Sign Up"/>
            <AuthFormSwitch
                question="Have an account?"
                page="Sign In"
                route={Routes.LOGIN}
            />
		</AuthForm>
	);
};

export default SignUp;
