import React from 'react'

import logo from "../../assets/logo.png";

interface IProps {
    title: string;
}

const Banner = ({ title }: IProps) => {
    return (
        <div
            style={{ backgroundImage: `linear-gradient(90deg, rgba(45,139,255,.7) 40%, rgba(96,165,250,.7) 80%)` }} 
            className=' h-[200px] w-full flex items-center justify-center'>
            <h2 className="text-2xl text-white">{title}</h2>
        </div>
    )
}

export default Banner