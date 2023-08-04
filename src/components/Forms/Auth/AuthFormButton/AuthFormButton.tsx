import React from "react"

interface IProps {
    content: string;
}

const AuthFormButton = ({ content }: IProps) => {
    return (
        <div className="flex mb-4">
            <button
                className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
            >
                    {content}
            </button>
        </div>
    )
}

export default AuthFormButton