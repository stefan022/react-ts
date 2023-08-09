import React, { FC } from 'react'

import { PhoneCards } from '../../../../components'
import { TCategories } from '../../../../ts/types/TCategories';

interface IProps {
    category: TCategories;
}

const CardsView: FC<IProps> = ({ category }): JSX.Element => {
    return (
        <div className='flex flex-wrap'>
            {
                category === "phones" && <PhoneCards />
            }
        </div>
    )
}

export default CardsView