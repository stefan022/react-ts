import React from 'react'
import { profileInfoData } from './profileInfoData'

const ProfileInfo = () => {
    return (
        <div>
            <div className='p-4 flex justify-between border border-gray-300'>
                <p className='font-bold'>Personal info</p>
                <button className='bg-gray-300 py-0.5 px-2'>Edit</button>
            </div>
            <div className='p-4 flex flex-col justify-between border border-gray-300'>
                {
                    profileInfoData.map((information) => {
                        const { profileInfoId, section, info } = information;

                        return (
                            <div key={profileInfoId} className='flex w-full'>
                                <p className='w-1/2'>{section}</p>
                                <p className='w-1/2'>{info}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProfileInfo