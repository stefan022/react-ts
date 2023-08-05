import React from 'react'
import { ProductGridCard } from '../../../../components'

const ProductsGrid = () => {
    return (
        <div className='flex flex-wrap'>
            <ProductGridCard
                productName='$productName'
                colors={["red", "red", "red", "red"]}
                productPrice="$productPrice"
                rating={5}
            />
            <ProductGridCard
                productName='$productName'
                colors={["red", "red", "red", "red"]}
                productPrice="$productPrice"
                rating={5}
            />
            <ProductGridCard
                productName='$productName'
                colors={["red", "red", "red", "red"]}
                productPrice="$productPrice"
                rating={5}
            />
            <ProductGridCard
                productName='$productName'
                colors={["red", "red", "red", "red"]}
                productPrice="$productPrice"
                rating={5}
            />
            <ProductGridCard
                productName='$productName'
                colors={["red", "red", "red", "purple"]}
                productPrice="$productPrice"
                rating={5}
            />
            <ProductGridCard
                productName='$productName'
                colors={["black", "red", "red", "red"]}
                productPrice="$productPrice"
                rating={5}
            />
            <ProductGridCard
                productName='$productName'
                colors={["red", "gray", "yellow", "red"]}
                productPrice="$productPrice"
                rating={5}
            />
            <ProductGridCard
                productName='$productName'
                colors={["red", "red", "red", "blue"]}
                productPrice="$productPrice"
                rating={5}
            />
        </div>
    )
}

export default ProductsGrid