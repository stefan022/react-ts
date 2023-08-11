import React from 'react'
import { Banner } from '../../../components'

import televisions from "../../../assets/televisions.png";

const Televisions = () => {
    return (
        <div>
            <Banner 
                title="Televisions"
                bgPosition="bg-left"
                bgNoRepeat="bg-no-repeat"
                image={televisions}
            />
            <p>Televisions</p>
        </div>
    )
}

export default Televisions