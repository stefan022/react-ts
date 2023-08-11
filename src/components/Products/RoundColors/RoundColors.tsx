import React, { FC } from 'react'

import { colors as constColors } from '../../../constants/colors';
import { TColors } from '../../../ts/types/TColors';

interface IProps {
    phoneId?: number;
    colors: TColors[];
    largeSize: boolean;
}

const RoundColors: FC<IProps> = ({ phoneId, colors, largeSize }): JSX.Element => {
    return ( 
        <>
            {
                colors 
                ? colors.map((color: TColors) => {
                    return (
                        <div 
                            key={`${phoneId}${color}`}
                            className={`
                            ${constColors[color]} 
                            ${largeSize ? "w-7 h-7" : "w-5 h-5"}
                            border rounded-full
                        `}/>
                    )
                })
                : null
            }
        </>
    )
}

export default RoundColors