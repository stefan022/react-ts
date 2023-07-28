import React from 'react'
import { Banner } from '../../components'
import ContentMiddle from '../../content/ContentMiddle'

import { MdEmail, MdLocationPin } from "react-icons/md"
import { AiFillPhone } from "react-icons/ai"

import { SupportForm } from "../../components";

const Support = () => {
    return (
        <div>
            <Banner
                title="Support"
                desc="If you need help, send us a message!"
            />
            <ContentMiddle>
                <div className='flex gap-6 justify-between py-6'>
                    <div className="w-2/6 h-full">
                        <div className='flex flex-col gap-6'>
                            <div className='flex p-6 gap-4 border border-gray-400'>
                                <div className='flex items-center justify-center p-5 bg-red-100 rounded-sm'>
                                    <MdEmail color="red" size={24}/>
                                </div>
                                <div className='flex flex-col justify-around'>
                                    <p className='font-bold'>Email</p>
                                    <p className='text-gray-400 text-sm'>electronexhelp@gmail.com</p>
                                </div>
                            </div>
                            <div className='flex p-6 gap-4 border border-gray-400'>
                                <div className='flex items-center justify-center p-5 bg-green-100 rounded-sm'>
                                    <AiFillPhone color="green" size={24}/>
                                </div>
                                <div className='flex flex-col justify-around'>
                                    <p className='font-bold'>Phone Number</p>
                                    <p className='text-gray-400 text-sm'>+381 60/100-10-10</p>
                                </div>
                            </div>
                            <div className='flex p-6 gap-4 border border-gray-400'>
                                <div className='flex items-center justify-center p-5 bg-blue-100 rounded-sm'>
                                    <MdLocationPin color="blue" size={24}/>
                                </div>
                                <div className='flex flex-col justify-around'>
                                    <p className='font-bold'>Office</p>
                                    <p className='text-gray-400 text-sm'>Unknown Street bb, Belgrade, Serbia</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-4/6 border border-gray-400 flex justify-center p-8">
                        <SupportForm/>
                    </div>
                </div>
            </ContentMiddle>
        </div>
    )
}

export default Support