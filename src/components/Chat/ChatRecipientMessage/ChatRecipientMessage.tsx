import React from 'react'

interface IProps {
    text: string;
}

const ChatMessageRecipient = ({ text }: IProps) => {
    return (
        <div className='w-full border-gray-400 flex justify-start mb-2 last:mb-0'>
            <div className='w-1/3 flex justify-start'>
                <p className='bg-blue-400 py-1 px-3'>{text}</p>
            </div>
        </div>
    )
}

export default ChatMessageRecipient