import React from 'react'

const Comment = () => {
    return (
        <div className='flex'>
            <div className='w-1/12'></div>
            <div className='w-11/12 border border-gray-400 flex'>
                <div className='w-1/12 border border-gray-400'></div>
                <div className='w-11/12 p-4'>
                    <div className='flex justify-between items-center mb-4'>
                        <p>$username</p>
                        <p>Date: $timestamp</p>
                    </div>
                    <div className='mb-4'>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, numquam!</p>
                    </div>
                    <div className='flex gap-2'>
                        <div>Likes</div>
                        <div>Replies</div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default Comment