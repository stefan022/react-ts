import React from 'react'
import { Banner, FaqServices } from '../../components'
import ContentMiddle from '../../content/ContentMiddle'

import { FaqComponent } from "../../components";

const Faq = () => {
    return (
        <div>
            <Banner
                title="Frequently Asked Questions"
            />
            <ContentMiddle>
                <div className='flex justify-between gap-6 py-6'>
                    <FaqServices/>
                </div>
                <div className='w-3/5 mx-auto'>
                    <h3 className='mb-2'>General Questions</h3>
                    <FaqComponent/>
                </div>
            </ContentMiddle>
        </div>
    )
}

export default Faq