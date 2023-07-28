import React from 'react'

const ProfileInfo = () => {
    return (
        <div>
            <div className='p-4 flex justify-between border border-gray-300'>
                <p className='font-bold'>Personal info</p>
                <button className='bg-gray-300 py-0.5 px-2'>Edit</button>
            </div>
            <div className='p-4 flex flex-col justify-between border border-gray-300'>
                <div className='flex w-full'>
                    <p className='w-1/2'>First Name:</p>
                    <p className='w-1/2'>$firstName</p>
                </div>
                <div className='flex w-full'>
                    <p className='w-1/2'>Last Name:</p>
                    <p className='w-1/2'>$lastName</p>
                </div>
                <div className='flex w-full'>
                    <p className='w-1/2'>Email:</p>
                    <p className='w-1/2'>$email</p>
                </div>
                <div className='flex w-full'>
                    <p className='w-1/2'>Username:</p>
                    <p className='w-1/2'>$username</p>
                </div>
                <div className='flex w-full'>
                    <p className='w-1/2'>Since member:</p>
                    <p className='w-1/2'>$timestamp</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo