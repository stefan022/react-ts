import React from 'react'

interface IProps {
    text: string;
}

const ChatSenderMessage = ({ text }: IProps) => {
    return (
        <div className='w-full border-gray-400 flex justify-end mb-2 last:mb-0'>
            <div className='w-1/3 flex justify-end'>
                <p className='bg-gray-400 py-1 px-3'>{text}</p>
            </div>
        </div>
    )
}

export default ChatSenderMessage