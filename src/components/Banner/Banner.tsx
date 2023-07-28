import React from 'react'

interface IProps {
    title: string;
    desc?: string;
    navigation?: string;
    bgPosition?: string;
    bgNoRepeat?: string;
    image?: string;
}

const Banner = ({ title, desc, navigation, bgPosition, bgNoRepeat, image }: IProps) => {
    return (
        <div
            style={{ 
                backgroundImage: 
                `linear-gradient(90deg, rgba(45,139,255,.9) 40%, rgba(96,165,250,.9) 80%), 
                url(${image})` 
            }} 
                className={`${bgPosition} ${bgNoRepeat} h-[200px] w-full flex flex-col items-center justify-center text-white`}>
            <h2 className="text-3xl">{title}</h2>
            {
                desc ? <p className="text-gray-100 pt-2">{desc}</p> : null
            }
        </div>
    )
}

export default Banner