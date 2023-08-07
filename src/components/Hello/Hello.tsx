import React from 'react'
import { SiHey } from 'react-icons/si'

const Hello = () => {
    return (
        <div className="flex flex-col items-center justify-end text-3xl h-1/2 pb-12">
            <p className="flex items-center">Hey! <SiHey className="mx-1 text-blue-400" size={30}/> My name is Stefan</p>
            <p>and I'm a <span className="text-blue-400 font-bold on_off">FE/React developer!</span></p>
        </div>
    )
}

export default Hello