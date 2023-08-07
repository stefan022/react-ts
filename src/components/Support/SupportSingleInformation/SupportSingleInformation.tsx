import React from 'react'

interface IProps {
    title: string;
    info: string;
    icon: JSX.Element;
}

const SupportSingleInformation = ({ title, info, icon }: IProps) => {
    return (
        <div className='flex p-6 gap-4 border border-gray-400'>
            <div className='flex items-center justify-center p-5 bg-red-100 rounded-sm'>
                {icon}
            </div>
            <div className='flex flex-col justify-around'>
                <p className='font-bold'>{title}</p>
                <p className='text-gray-400 text-sm'>{info}</p>
            </div>
        </div>
    )
}

export default SupportSingleInformation