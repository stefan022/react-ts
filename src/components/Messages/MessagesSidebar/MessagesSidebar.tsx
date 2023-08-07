import React from 'react'

const MessagesSidebar = () => {
    return (
        <div className='w-1/5 border border-gray-400 flex flex-col h-full'>
            <div className='p-4 border-b border-b-gray-400'>Notifications</div>
            <div className='flex border-b border-b-gray-400'>
                <div className='h-[75px] w-1/5 p-2'>
                    <div className='bg-red-300 rounded-full h-[40px] w-[40px]'></div>
                </div>
                <div className='p-2'>
                    <p>$adminName</p>
                    <p>Lorem ipsum dolor sit...</p>
                </div>
            </div>
        </div>
    )
}

export default MessagesSidebar