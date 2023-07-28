import React from 'react'
import { Banner } from '../../../components'

import phones from "../../../assets/phones.png";

const Phones = () => {
    return (
        <div>
            <Banner
                title="Phones"
                bgPosition="bg-center"
                bgNoRepeat="bg-no-repeat"
                image={phones}
            />
            <p>Phones</p>
        </div>
    )
}

export default Phones