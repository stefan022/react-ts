import React from 'react'

import { AuthResetPassword } from '../../components';

import logo from "../../assets/logo.png";
import wallpaper from "../../assets/wallpaper.png";

const ResetPassword = () => {
    return (
        <div className="flex items-center">
			<div className="relative w-1/2">
                <img className="absolute top-5 right-0 z-10" src={logo} alt="logo.png" />
                <img className="w-full h-screen relative" src={wallpaper} alt="wallpaper.png"/>
            </div>
			<div className="w-1/2">
                <AuthResetPassword/>
			</div>
		</div>
    )
}

export default ResetPassword