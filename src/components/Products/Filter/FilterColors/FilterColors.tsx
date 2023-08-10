import React, { FC } from 'react'

import { Colors } from '../../../../ts/types/Colors'
import { colors as constColors } from "../../../../constants/colors";

interface IProps {
    uniqueColors: Colors[];
}

const FilterColors: FC<IProps> = ({ uniqueColors }): JSX.Element => {
    return (
        <div className='border border-b-gray-400 p-4'>
            <p className='mb-2 text-gray-400'>Colors</p>
            <form className='flex gap-2 flex-wrap'>
            {
                uniqueColors.length > 0 ? (
                    uniqueColors.map((color: Colors, index) => (
                        <button key={index} className={`${constColors[color]} rounded-full w-5 h-5 border`}></button>
                    ))
                ) : null
            }
            </form>
        </div>
    )
}

export default FilterColors