import React from 'react'

import wallpaper from "../../assets/wallpaper.jpg"
import logo from "../../assets/logo.png"
import SignIn from '../../components/Forms/SignIn/SignIn'

const Login = () => {
    return (
        <div className="flex items-center">
            <div className="relative w-1/2">
                <img className="absolute top-5 right-0 z-10" src={logo} alt="logo.png" />
                <img className="w-full h-screen relative" src={wallpaper} alt="wallpaper.jpg"/>
            </div>
            <div className="w-1/2">
                <SignIn/>
            </div>
        </div>
    )
}

export default Login