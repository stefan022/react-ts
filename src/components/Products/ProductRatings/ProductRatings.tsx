import React from 'react'

const ProductRatings = () => {
    return (
        <div className='border border-gray-300 mb-6'>
            <div className='px-6 py-4 border border-b-blue-200'>
                <p>Ratings</p>
            </div>
            <div className='flex justify-between w-full'>
                <div className='flex flex-col p-6 gap-4 border border-r-gray-300 w-4/12'>
                    <p>Total Ratings</p>
                    <p>10k</p>
                </div>
                <div className='flex flex-col p-6 gap-4 border border-r-gray-300 w-4/12'>
                    <p>Average Rating</p>
                    <p>5 &#9733; &#9733; &#9733; &#9733; &#9733;</p>
                </div>
                <div className='flex flex-col p-6 w-4/12'>
                    <div className='flex items-center'>
                        <p>&#9733; 5</p>
                        <progress value="80" max="100"></progress>
                        <p>2030</p>
                    </div>
                    <div className='flex items-center'>
                        <p>&#9733; 4</p>
                        <progress value="60" max="100"></progress>
                        <p>100</p>
                    </div>
                    <div className='flex items-center'>
                        <p>&#9733; 3</p>
                        <progress value="40" max="100"></progress>
                        <p>55</p>
                    </div>
                    <div className='flex items-center'>
                        <p>&#9733; 2</p>
                        <progress value="20" max="100"></progress>
                        <p>23</p>
                    </div>
                    <div className='flex items-center'>
                        <p>&#9733; 1</p>
                        <progress value="10" max="100"></progress>
                        <p>5</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductRatings