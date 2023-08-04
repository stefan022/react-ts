import React from 'react'
import { Link } from 'react-router-dom'

interface IProps {
    question: string;
    route: string;
    page: string;
}

const AuthFormSwitch = ({ question, route, page }: IProps) => {
    return (
        <div className="flex text-base justify-center mb-4">
            <p>{question}</p>
            <Link 
                className="text-blue-400 hover:text-blue-500 font-bold ml-1"
                to={route}
            >
                    {page}
            </Link>
        </div>
    )
}

export default AuthFormSwitch