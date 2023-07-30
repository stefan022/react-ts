import React from 'react'

const ProductsSort = () => {
  return (
    <div className='flex'>
        <p>Sort by: </p>
        <select className='ml-2' id="cars">
            <option value="all">All</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
            <option value="az">A - Z</option>
            <option value="za">Z - A</option>
        </select>
    </div>
  )
}

export default ProductsSort