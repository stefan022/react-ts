import React, { FC } from 'react'

import { PhoneCards } from '../../../../components'
import { Categories } from '../../../../ts/types/categories';

interface IProps {
    category: Categories;
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