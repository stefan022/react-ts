import React from 'react'

import { Banner, Categories } from '../../components'
import products from "../../assets/products.png";

const Products = () => {
    return (
        <div>
            <Banner
                title="All Product Categories"
                bgPosition="bg-bottom"
                bgNoRepeat="bg-no-repeat"
                image={products}
            />
            <Categories/>
        </div>
    )
}

export default Products