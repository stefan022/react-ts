import React, { ReactNode } from 'react'
import ContentMiddle from '../../content/ContentMiddle'
import { Link } from 'react-router-dom';
import { Routes } from '../../router/Routes';
import ProfileInfo from './ProfileInfo/ProfileInfo';

interface IProps {
    children?: ReactNode;
}

const Profile = ({ children }: IProps) => {
    return (
        <div>
            <div className='bg-blue-400 h-[150px] w-full flex items-center justify-center'>
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
                <div className="flex w-full">
                    <div className="border border-gray-400 w-1/6 flex flex-col items-center p-4">
                        <ul className="w-full text-center">
                            <Link to={Routes.PROFILE}><li className="bg-blue-400 mb-3 rounded-lg">Profile</li></Link>
                            <Link to={`${Routes.PROFILE}${Routes.WISHLIST}`}><li className="bg-blue-400 mb-3 rounded-lg">Wishlist</li></Link>
                            <li className="bg-blue-400 mb-3 rounded-lg">Orders</li>
                            <li className="bg-blue-400 mb-3 rounded-lg">Settings</li>
                            <li className="bg-blue-400 rounded-lg">Logout</li>
                        </ul>
                    </div>
                    <div className="border border-gray-400 w-5/6 p-4">
                        {children ? children : <ProfileInfo/>}
                    </div>
                </div>
            </ContentMiddle>
        </div>
    )
}

export default Profile