import React from 'react'

interface IProps {
    title: string;
}

const Banner = ({ title }: IProps) => {
    return (
        <div className='bg-blue-400 h-[150px] w-full flex items-center justify-center'>
            <h2 className="text-2xl text-white">{title}</h2>
        </div>
    )
}

export default Banner