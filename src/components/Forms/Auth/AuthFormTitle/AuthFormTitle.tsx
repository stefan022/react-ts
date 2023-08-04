import React from 'react'

interface IProps {
    title: string;
}

const AuthFormTitle = ({ title }: IProps) => {
    return (
        <p className="text-2xl text-gray-700 font-bold mb-6">{title}</p>
    )
}

export default AuthFormTitle