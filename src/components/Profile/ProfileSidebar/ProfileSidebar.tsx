import React, { Fragment } from 'react'
import { profileData } from '../profileData';
import { Link } from 'react-router-dom';

const ProfileSidebar = () => {
    return (
        <div className="border border-gray-400 w-1/6 p-4">
            <ul>
                {
                    profileData.map((data) => {
                        const { id, route, text } = data;

                        return (
                            <Fragment key={id}>
                                <Link to={route}>
                                    <li>{text}</li>
                                </Link>
                            </Fragment>
                        )
                    })
                }
                <li>Logout</li>
            </ul>
        </div>
    )
}

export default ProfileSidebar