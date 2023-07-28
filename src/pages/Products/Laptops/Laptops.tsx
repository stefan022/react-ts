import React from 'react'
import { Banner } from '../../../components'

import laptops from "../../../assets/laptops.png"

const Laptops = () => {
    return (
        <div>
            <Banner
                title="Laptops"
                bgPosition="bg-center"
                bgNoRepeat="bg-no-repeat"
                image={laptops}
            />
            <p>Laptops</p>
        </div>
    )
}

export default Laptops