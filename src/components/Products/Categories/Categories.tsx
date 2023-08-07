import React from 'react'

import { categoriesData } from './categoriesData'
import { Category } from "../../../components"

const Categories = () => {
    return (
        <ul>
            {
                categoriesData.map((category) => {
                    const { categoryId, categoryName, route } = category;

                    return (
                        <Category 
                            key={categoryId} 
                            categoryName={categoryName}
                            route={route}
                        />
                    )
                })
            }
        </ul>
    )
}

export default Categories