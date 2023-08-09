import React, { FC } from 'react'

import { PhoneLists } from "../../../../components"
import { TCategories } from '../../../../ts/types/TCategories';

interface IProps {
    category: TCategories;
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