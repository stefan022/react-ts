import React from 'react'
import { Link } from 'react-router-dom'
import { Routes } from '../../../router/Routes'

import logo from "../../../assets/logo.png";

const Logo = () => {
  return (
    <div className="cursor-pointer">
        <Link to={Routes.HOME}><img src={logo} alt="logo.png" /></Link>
    </div>
  )
}

export default Logo