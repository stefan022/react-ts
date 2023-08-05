import React from 'react'
import { Link } from 'react-router-dom'
import { Routes } from '../../../../router/Routes'
import { ProductListCard } from "../../.."

const ProductsList = () => {
    return (
        <div className='flex flex-wrap'>
            <ProductListCard
                productName='$productName'
                description='$desc'
                colors={["red", "red", "red", "red"]}
                price='$price'
                rating={5}
                status='available'
            />
            <ProductListCard
                productName='$productName'
                description='$desc'
                colors={["red", "red", "red", "red"]}
                price='$price'
                rating={5}
                status='available'
            />
            <ProductListCard
                productName='$productName'
                description='$desc'
                colors={["red", "red", "red", "red"]}
                price='$price'
                rating={5}
                status='available'
            />
            <ProductListCard
                productName='$productName'
                description='$desc'
                colors={["red", "red", "red", "red"]}
                price='$price'
                rating={5}
                status='available'
            />
        </div>
    )
}

export default ProductsList