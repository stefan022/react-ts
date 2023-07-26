import React from "react";
import { Link } from "react-router-dom";
import { Routes } from "../../../router/Routes";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const SignIn = () => {
    const [isVisible, setIsVisible] = React.useState(false);

    const handleChangeVisible = () => setIsVisible(!isVisible);

	return (
		<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-gray-300 w-1/2 ml-20">
            <p className="text-2xl text-gray-700 font-bold mb-6">Sign in to your account</p>
			<div className="mb-4">
				<label
					className="block text-gray-700 text-sm font-bold mb-2"
					htmlFor="signInEmail"
				>
					Email
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="signInEmail"
					type="text"
					placeholder="example@gmail.com"
				/>
			</div>
			<div className="mb-6">
                <div></div>
				<label
					className="block text-gray-700 text-sm font-bold mb-2"
					htmlFor="signInPassword"
				>
					Password
				</label>
                <div className="relative">
                    <input
				    	className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				    	id="signInPassword"
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
					Sign In
				</button>
            </div>
            <div className="flex text-base justify-center mb-4">
                <p>Don't have an account?</p>
                <Link 
                    className="text-blue-400 hover:text-blue-500 font-bold ml-1"
                    to={Routes.REGISTER}
                >
                        Sign Up
                </Link>
            </div>
            <div className="flex items-center justify-between mb-4">
                <div className="border border-gray-300 w-5/12 h-0"></div>
                <div className="w-2/12 flex justify-center">or</div>
                <div className="border border-gray-300 w-5/12 h-0"></div>
            </div>
            <button
					className="hover:bg-gray-100 text-gray-500 py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full border border-gray-400 flex items-center justify-center"
					type="button"
				>
                    <FcGoogle size={24}/>
					<p className="ml-2 text-base">Sign In with Google</p>
			</button>
		</form>
	);
};

export default SignIn;
