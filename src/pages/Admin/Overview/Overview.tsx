import React from 'react'

const Overview = () => {
    return (
        <div className='flex flex-col gap-4'>
            <div className='w-full flex justify-between gap-4'>
                <div className='w-3/12 h-[150px] border border-gray-400'></div>
                <div className='w-3/12 h-[150px] border border-gray-400'></div>
                <div className='w-3/12 h-[150px] border border-gray-400'></div>
                <div className='w-3/12 h-[150px] border border-gray-400'></div>
            </div>
            <div className='w-full flex justify-between gap-4'>
                <div className='w-8/12 h-[300px] border border-gray-400'></div>
                <div className='w-4/12 h-[300px] border border-gray-400'></div>
            </div>
        </div>
    )
}

export default Overview