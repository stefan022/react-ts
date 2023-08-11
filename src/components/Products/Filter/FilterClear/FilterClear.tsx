import React, { FC } from 'react'

const FilterClear: FC = (): JSX.Element => {
    return (
        <button 
            type='submit' 
            className='bg-blue-400 text-white py-1 px-2 rounded-md hover:bg-blue-500 transition-all'
        >
            Clear filter
        </button>
    )
}

export default FilterClear