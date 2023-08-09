import React, { FC } from 'react'

import { colors as constColors } from '../../../constants/colors';
import { Colors } from '../../../ts/types/Colors';

interface IProps {
    colors: Colors[];
}

const SingleProductColors: FC<IProps> = ({ colors }): JSX.Element => {
    return ( 
        <>
            {
                colors 
                ? colors.map((color: Colors) => {
                    return (
                        <div 
                            className={`
                            ${constColors[color]} 
                            border rounded-full w-5 h-5
                        `}/>
                    )
                })
                : null
            }
        </>
    )
}

export default SingleProductColors