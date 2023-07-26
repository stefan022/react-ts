import React from 'react'
import ContentMiddle from '../../content/ContentMiddle'

const Profile = () => {
    return (
        <div>
            <div className='bg-blue-300 h-[150px] w-full flex items-center justify-center'>
                <h2 className="text-2xl text-white">Account Information</h2>
            </div>
            <ContentMiddle>
                <div className="flex justify-between items-center">
                    <div className="flex items-center relative">
                        <div className="w-[100px] h-[100px] rounded-full border border-gray-700 absolute z-10 bg-white"></div>
                    </div>
                    <div className="ml-2">
                        <p>First Name / Last Name</p>
                    </div>
                    <div>
                        <div>Go to Shopping</div>
                    </div>
                </div>
            </ContentMiddle>
        </div>
    )
}

export default Profile