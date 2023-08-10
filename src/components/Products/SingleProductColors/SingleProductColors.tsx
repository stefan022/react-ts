import React, { FC } from 'react'

import { colors as constColors } from '../../../constants/colors';
import { Colors } from '../../../ts/types/Colors';

interface IProps {
    phoneId: number;
    colors: Colors[];
}

const SingleProductColors: FC<IProps> = ({ phoneId, colors }): JSX.Element => {
    return ( 
        <>
            {
                colors 
                ? colors.map((color: Colors) => {
                    return (
                        <div 
                            key={`${phoneId}${color}`}
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