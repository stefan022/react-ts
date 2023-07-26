import React from "react";
import { Link } from "react-router-dom";
import { Routes } from "../../../router/Routes";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const SignUp = () => {
    const [isVisible, setIsVisible] = React.useState(false);

    const handleChangeVisible = () => setIsVisible(!isVisible);

	return (
		<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-gray-300 w-1/2 ml-20">
            <p className="text-2xl text-gray-700 font-bold mb-6">Sign up to your account</p>
            <div className="mb-4">
				<label
					className="block text-gray-700 text-sm font-bold mb-2"
					htmlFor="signUpFirstName"
				>
					First Name
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="signUpFirstName"
					type="text"
					placeholder="Eliot"
				/>
			</div>
            <div className="mb-4">
				<label
					className="block text-gray-700 text-sm font-bold mb-2"
					htmlFor="signUpLastName"
				>
					Last Name
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="signUpLastName"
					type="text"
					placeholder="Alderson"
				/>
			</div>
            <div className="mb-4">
				<label
					className="block text-gray-700 text-sm font-bold mb-2"
					htmlFor="signUpUsername"
				>
					Username
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="signUpUsername"
					type="text"
					placeholder="eliot404"
				/>
			</div>
			<div className="mb-4">
				<label
					className="block text-gray-700 text-sm font-bold mb-2"
					htmlFor="signUpEmail"
				>
					Email
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="signUpEmail"
					type="text"
					placeholder="example@gmail.com"
				/>
			</div>
			<div className="mb-6">
                <div></div>
				<label
					className="block text-gray-700 text-sm font-bold mb-2"
					htmlFor="signUpPassword"
				>
					Password
				</label>
                <div className="relative">
                    <input
				    	className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				    	id="signUpPassword"
				    	type={isVisible ? "text" : "password"}
				    	placeholder="********"
				    />
                    <button 
                        type="button" 
                        className="absolute top-2.5 right-2.5"
                        onClick={handleChangeVisible}
                    >
                        {
                            isVisible 
                                ? <AiFillEye size={20} color="gray"/>
                                : <AiFillEyeInvisible size={20} color="gray"/>
                        }
                    </button>
                </div>

			</div>
			<div className="flex justify-end mb-4">
				<a
					className="inline-block align-baseline font-bold text-sm text-blue-400 hover:text-blue-500"
					href="#"
				>
					Forgot Password?
				</a>
			</div>
            <div className="flex mb-4">
                <button
					className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
					type="button"
				>
					Sign Up
				</button>
            </div>
            <div className="flex text-base justify-center mb-4">
                <p>Have an account??</p>
                <Link 
                    className="text-blue-400 hover:text-blue-500 font-bold ml-1"
                    to={Routes.LOGIN}
                >
                        Sign In
                </Link>
            </div>
		</form>
	);
};

export default SignUp;
