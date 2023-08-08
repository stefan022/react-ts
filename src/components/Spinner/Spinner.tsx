import React from 'react'

import { RingLoader } from 'react-spinners'

const Spinner = () => {
    return (
        <div className='fixed w-full h-screen bg-white z-10 opacity-90 flex items-center justify-center'>
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