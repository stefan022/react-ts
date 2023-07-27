import React from 'react'
import { Link } from 'react-router-dom'
import { Routes } from '../../router/Routes'

const Products = () => {
    return (
        <div>
            <ul>
                <Link to={`${Routes.PRODUCTS}${Routes.PHONES}`}><li>Phones</li></Link>
                <Link to={`${Routes.PRODUCTS}${Routes.TABLETS}`}><li>Tablets</li></Link>
                <Link to={`${Routes.PRODUCTS}${Routes.LAPTOPS}`}><li>Laptops</li></Link>
                <Link to={`${Routes.PRODUCTS}${Routes.TELEVISIONS}`}><li>Televisions</li></Link>
                <Link to={`${Routes.PRODUCTS}${Routes.OTHERS}`}><li>Others</li></Link>
            </ul>
        </div>
    )
}

export default Products