import React, { Fragment } from 'react'
import { profileData } from '../profileData';
import { Link } from 'react-router-dom';

import { IoLogOutOutline } from "react-icons/io5";

const ProfileSidebar = () => {
    const [ currentActive, setCurrentActive ] = React.useState<number>(1);
    const handleChangeActive = (id: number) => setCurrentActive(id);

    return (
        <div className="border border-gray-400 w-1/6 p-4">
            <ul>
                {
                    profileData.map((data) => {
                        const { id, route, text, icon } = data;

                        return (
                            <Fragment key={id}>
                                <Link 
                                    to={route}
                                    onClick={() => handleChangeActive(id)}
                                >
                                    <li className={`
                                        ${currentActive === id ? "bg-blue-400 text-white" : ""}
                                        border border-gray-300 py-1 px-3 mb-4 flex items-center gap-2
                                    `}>
                                        <div>{icon}</div>
                                        <p>{text}</p>
                                    </li>
                                </Link>
                            </Fragment>
                        )
                    })
                }
                <li className='border border-gray-300 py-1 px-3 flex items-center gap-2'>
                    <div><IoLogOutOutline/></div>
                    <p>Logout</p>
                </li>
            </ul>
        </div>
    )
}

export default ProfileSidebar