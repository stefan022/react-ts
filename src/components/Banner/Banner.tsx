import React from 'react'

interface IProps {
    title: string;
    image?: string;
}

const Banner = ({ title, image }: IProps) => {
    return (
        <div
            style={{ 
                backgroundImage: 
                `linear-gradient(90deg, rgba(45,139,255,.9) 40%, rgba(96,165,250,.9) 80%), 
                url(${image})` 
            }} 
            className='bg-bottom h-[200px] w-full flex items-center justify-center'>
            <h2 className="text-2xl text-white">{title}</h2>
        </div>
    )
}

export default Banner