import React from 'react'

interface IProps {
    handleChangeProductsView: (view: string) => void;
}

const View = ({ handleChangeProductsView }: IProps) => {
    return (
        <div className='flex gap-2'>
            <button 
                onClick={() => handleChangeProductsView("grid")}
                className='border border-gray-300'
            >
                    Grid
            </button>
            <button 
                onClick={() => handleChangeProductsView("list")}
                className='border border-gray-300'
            >
                List
            </button>
        </div>
    )
}

export default View