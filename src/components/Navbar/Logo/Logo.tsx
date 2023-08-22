import React, { FC } from 'react'

import { Link } from 'react-router-dom'
import { Routes } from '../../../router/Routes'

import logo from "../../../assets/logo.png";

const Logo: FC = (): JSX.Element => {
    return (
        <div className="cursor-pointer py-2">
            <Link to={Routes.HOME}>
                <img width={230} src={logo} alt="logo.png" />
            </Link>
        </div>
    )
}

export default Logo