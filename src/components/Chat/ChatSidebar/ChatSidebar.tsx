import React from 'react'

const ChatSidebar = () => {
    return (
        <div className='w-1/5 border border-gray-400 h-full'>
            <div className='w-full'>
                <button className='bg-blue-400 text-white h-full w-full py-4'>+ New Chat</button>
            </div>
            <div className='flex border-b border-b-gray-400'>
                <div className='h-[75px] w-1/5 p-2'>
                    <div className='bg-red-300 rounded-full h-[40px] w-[40px]'></div>
                </div>
                <div className='p-2'>
                    <div className='flex items-center justify-between'>
                        <p>$username</p>
                        <p>$ts</p>
                    </div>
                    <p>Lorem ipsum dolor sit...</p>
                </div>
            </div>
        </div>
    )
}

export default ChatSidebar