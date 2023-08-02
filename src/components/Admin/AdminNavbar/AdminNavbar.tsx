import React from 'react'

const AdminNavbar = () => {
    return (
        <div className='py-5 px-4 flex justify-end items-center gap-4 border border-gray-400'>
            <div>$toggleTheme</div>
            <div>$notification</div>
            <div className='border border-gray-400 w-10 h-10 rounded-full'></div>
        </div>
    )
}

export default AdminNavbar