import React, { FC } from 'react'

import logo from "../../../assets/logo.png";
import { adminSidebarData } from './adminSidebarData';
import { Link } from 'react-router-dom';
import { Routes } from '../../../router/Routes';

import "./AdminSidebar.scss"

interface IProps {
    darkTheme: boolean;
}

const AdminSidebar: FC<IProps> = ({ darkTheme }): JSX.Element => {
    return (
        <div className={ darkTheme ? "admin__sidebar-dark" : "admin__sidebar" }>
            <div className='admin__sidebar_image'>
                <img src={logo} alt="logo.png" />
            </div>
            <div>
                {
                    adminSidebarData.map((adminSidebar) => {
                        const { id, icon, route, title } = adminSidebar;

                        return (
                            <Link
                                to={route}
                                key={id}
                                className={ darkTheme ? "admin__sidebar_link-dark" : "admin__sidebar_link" }
                            >
                                <div className="mr-2">{icon}</div>
                                <p className="text-lg">{title}</p>
                            </Link>
                        )
                    })
                }
            </div>
            <Link
                className='p-5'
                to={Routes.HOME}
            >
                <button className={ darkTheme ? "admin__sidebar_button-dark" : "admin__sidebar_button" }>
                    Open Application
                </button>
            </Link>
        </div>
    )
}

export default AdminSidebar