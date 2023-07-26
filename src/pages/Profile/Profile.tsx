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
            </ContentMiddle>
        </div>
    )
}

export default Profile