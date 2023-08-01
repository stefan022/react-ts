import React from 'react'
import { Banner, FaqServices } from '../../components'
import Container from '../../containers/Container/Container'

import { FaqComponent } from "../../components";

const Faq = () => {
    return (
        <div>
            <Banner
                title="Frequently Asked Questions"
            />
            <Container>
                <div className='flex justify-between gap-6 py-6'>
                    <FaqServices/>
                </div>
                <div className='w-3/5 mx-auto'>
                    <h3 className='mb-2'>General Questions</h3>
                    <FaqComponent/>
                </div>
            </Container>
        </div>
    )
}

export default Faq