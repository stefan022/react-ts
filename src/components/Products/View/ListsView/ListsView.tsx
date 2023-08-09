import React, { FC } from 'react'

import { PhoneLists } from "../../../../components"
import { Categories } from '../../../../ts/types/categories';

interface IProps {
    category: Categories;
}

const ListsView: FC<IProps> = ({ category }): JSX.Element => {
    return (
        <div className='flex flex-wrap'>
            {
                category === "phones" && <PhoneLists/>
            }
        </div>
    )
}

export default ListsView