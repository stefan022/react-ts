import React from 'react'

import logo from "../../../assets/logo.png";
import { adminSidebarData } from './adminSidebarData';
import { Link } from 'react-router-dom';
import { Routes } from '../../../router/Routes';

const AdminSidebar = () => {
    return (
        <div className='flex flex-col border border-gray-400 h-screen'>
            <div className='flex justify-center items-center px-5 py-4'>
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
                                className="flex items-center hover:bg-blue-400 hover:text-white text-blue-400 transition-all px-5 py-2.5 mb-2"
                            >
                                <div className="mr-2">{icon}</div>
                                <p>{title}</p>
                            </Link>
                        )
                    })
                }
            </div>
            <Link
                className='p-5'
                to={Routes.HOME}
            >
                <button className='bg-blue-400 text-white px-3 py-1 hover:bg-blue-500 rounded-lg'>Open Application</button>
            </Link>
        </div>
    )
}

export default AdminSidebar