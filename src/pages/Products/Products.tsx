import React from 'react'

import { Banner, Categories } from '../../components'
import products from "../../assets/products.png";
import { Container } from '../../containers';

const Products = () => {
    return (
        <div>
            <Banner
                title="All Product Categories"
                bgPosition="bg-bottom"
                bgNoRepeat="bg-no-repeat"
                image={products}
            />
            <Container>
                <Categories/>
            </Container>
        </div>
    )
}

export default Products