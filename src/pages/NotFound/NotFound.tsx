import React from 'react'

import error404 from "../../assets/error404.png";
import { Link } from 'react-router-dom';
import { Routes } from '../../router/Routes';

const NotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <img width={300} src={error404} alt="error404.png"/>
            <h2 className='mt-10 text-lg font-bold'>Sorry, page not found!</h2>
            <Link to={Routes.HOME}>
                <button className='bg-yellow-300 hover:bg-yellow-400 transition-all py-1 px-3 mt-2 rounded-md'>Back to Home page</button>
            </Link>
        </div>
    )
}

export default NotFound