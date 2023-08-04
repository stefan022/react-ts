import React from 'react'
import { Routes } from '../../../../router/Routes'
import { Link } from 'react-router-dom'

const AuthResetPasswordSwitch = () => {
    return (
        <div className="flex justify-end mb-4">
            <Link
                className="inline-block align-baseline font-bold text-sm text-blue-400 hover:text-blue-500"
                to={Routes.RESET_PASSWORD}
            >
                Forgot Password?
            </Link>
        </div>
    )
}

export default AuthResetPasswordSwitch