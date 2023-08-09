import React from 'react'

import { PhoneLists } from "../../../../components"

const ListsView = () => {
    return (
        <div className='flex flex-wrap'>
            <PhoneLists
                productName='$productName'
                description='$desc'
                colors={["red", "red", "red", "red"]}
                price='$price'
                rating={5}
                status='available'
            />
            <PhoneLists
                productName='$productName'
                description='$desc'
                colors={["red", "red", "red", "red"]}
                price='$price'
                rating={5}
                status='available'
            />
            <PhoneLists
                productName='$productName'
                description='$desc'
                colors={["red", "red", "red", "red"]}
                price='$price'
                rating={5}
                status='available'
            />
            <PhoneLists
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

export default ListsView