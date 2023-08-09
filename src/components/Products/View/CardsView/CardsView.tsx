import React, { FC } from 'react'
import { PhoneCards } from '../../../../components'

interface IProps {
    category: "phones" | "tablets" | "laptops" | "televisions" | "others";
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