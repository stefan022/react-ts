import React from 'react'

import { RingLoader } from 'react-spinners'

const Spinner = () => {
    return (
        <div 
            style={{ zIndex: 10000000 }}
            className='fixed w-full h-screen top-0 left-0 bg-white opacity-90 flex items-center justify-center'
        >
            <RingLoader
                color="#2794d9"
                loading
                size={70}
                speedMultiplier={1.2}
            />
        </div>
    )
}

export default Spinner