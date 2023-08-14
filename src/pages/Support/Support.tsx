import React, { FC } from 'react'

import { Banner, SupportInformation, SupportForm } from '../../components'
import { Container } from '../../containers'
import { useGetAllSupportQuery } from '../../features/API/supportAPI';

const Support: FC = (): JSX.Element => {
    useGetAllSupportQuery();

    return (
        <div>
            <Banner
                title="Support"
                desc="If you need help, send us a message!"
            />
            <Container>
                <div className='flex gap-6 justify-between py-6'>
                    <div className="w-2/6 h-full">
                        <SupportInformation/>
                    </div>
                    <div className="w-4/6 border border-gray-400 flex justify-center p-8">
                        <SupportForm/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Support