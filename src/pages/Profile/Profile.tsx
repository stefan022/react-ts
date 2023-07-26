import React, { ReactNode } from 'react'
import ContentMiddle from '../../content/ContentMiddle'
import { Link } from 'react-router-dom';
import { Routes } from '../../router/Routes';

interface IProps {
    children?: ReactNode;
}

const Profile = ({ children }: IProps) => {
    return (
        <div>
            <div className='bg-blue-300 h-[150px] w-full flex items-center justify-center'>
                <h2 className="text-2xl text-white">Account Information</h2>
            </div>
            <ContentMiddle>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="w-[100px] h-[100px] rounded-full border border-gray-700 relative z-10 bg-white -top-8"></div> 
                        <div className="ml-2">
                        <p>First Name / Last Name</p>
                    </div>
                    </div>
                    <div className='flex items-center'>
                        <div>Go to Shopping</div>
                    </div>
                </div>
                <div className="flex">
                    <div className="border border-gray-400">
                        <ul>
                            <li><Link to={`${Routes.PROFILE}${Routes.PROFILE_INFO}`}>Profile Info</Link></li>
                            <li><Link to={`${Routes.PROFILE}${Routes.WISHLIST}`}>Wishlist</Link></li>
                            <li>Orders</li>
                            <li>Settings</li>
                            <li>Logout</li>
                        </ul>
                    </div>
                    <div className="border border-gray-400">
                        {children}
                    </div>
                </div>
            </ContentMiddle>
        </div>
    )
}

export default Profile