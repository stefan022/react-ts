import React from 'react'
import { Banner } from '../../../components'

import tablets from "../../../assets/tablets.png"

const Tablets = () => {
    return (
        <div>
            <Banner
                title="Tablets"
                bgPosition="bg-center"
                bgNoRepeat="bg-no-repeat"
                image={tablets}
            />
            <p>Tablets</p>
        </div>
    )
}

export default Tablets