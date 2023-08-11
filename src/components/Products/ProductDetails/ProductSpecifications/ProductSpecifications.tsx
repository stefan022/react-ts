import React, { FC } from 'react'

interface IProps {
    screen: {
        screenType: string;
        screenDiagonal: string;
    };
    memory: {
        ramMemory: string;
        internalMemory: string;
    };
    camera: {
        rearCamera: string;
        frontCamera: string;
    };
    battery: string;
}

const ProductSpecifications: FC<IProps> = ({ screen, memory, camera, battery }): JSX.Element => {
    return (
        <div className='border border-gray-400 w-full mb-6'>
            <div className='px-6 py-4 border border-b-blue-200'>
                <h3 className='font-bold'>Description</h3>
            </div>
            <div className='flex flex-col p-6'>
                <div className='flex justify-between mb-2'>
                    <p className='w-1/2'>RAM Memory:</p>
                    <p className='w-1/2'>{memory.ramMemory}</p>
                </div>
                <div className='flex justify-between mb-2'>
                    <p className='w-1/2'>Internal Memory:</p>
                    <p className='w-1/2'>{memory.internalMemory}</p>
                </div>
                <div className='flex justify-between mb-2'>
                    <p className='w-1/2'>Rear Camera:</p>
                    <p className='w-1/2'>{camera.rearCamera}</p>
                </div>
                <div className='flex justify-between mb-2'>
                    <p className='w-1/2'>Front Camera:</p>
                    <p className='w-1/2'>{camera.frontCamera}</p>
                </div>
                <div className='flex justify-between mb-2'>
                    <p className='w-1/2'>Screen Type:</p>
                    <p className='w-1/2'>{screen.screenType}</p>
                </div>
                <div className='flex justify-between mb-2'>
                    <p className='w-1/2'>Screen Diagonal:</p>
                    <p className='w-1/2'>{screen.screenDiagonal}</p>
                </div>
                <div className='flex justify-between mb-2'>
                    <p className='w-1/2'>Battery:</p>
                    <p className='w-1/2'>{battery}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductSpecifications