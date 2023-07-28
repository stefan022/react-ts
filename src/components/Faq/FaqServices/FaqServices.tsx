import React from 'react'
import { faqServicesData } from './faqServicesData'

const FaqServices = () => {
    return (
        <>
            {
                faqServicesData.map((service) => {
                    const { id, icon, text } = service;

                    return (
                        <div key={id} className='flex flex-col items-center justify-around w-1/4 border border-gray-300 py-8'>
                            <div className='bg-green-200 rounded-full p-6 mb-4'>
                                {icon}
                            </div>
                            <p className='font-bold text-gray-700'>{text}</p>
                        </div>
                    )   
                })
            }
        </>
    )
}

export default FaqServices