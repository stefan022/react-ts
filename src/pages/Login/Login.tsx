import React from 'react'

import { SignIn, Spinner } from '../../components'

import wallpaper from "../../assets/wallpaper.png"
import logo from "../../assets/logo.png"

const Login: React.FC = (): JSX.Element => {
    const [ loading, setLoading ] = React.useState<boolean>(false);

    return (
        <div className="flex items-center">
            <div className="relative w-1/2">
                <img className="absolute top-2.5 right-0 z-10" src={logo} alt="logo.png" />
                <img className="w-full h-screen relative" src={wallpaper} alt="wallpaper.png"/>
            </div>
            <div className="w-1/2">
                <SignIn
                    setLoading={setLoading}
                />
            </div>
            { loading && <Spinner/> }
        </div>
    )
}

export default Login