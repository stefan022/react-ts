import React, { FC } from 'react'

import { ProductDetails, Spinner } from "../../../../components"
import { useParams } from 'react-router-dom';
import { useGetSinglePhoneQuery } from '../../../../features/API/phonesAPI';
import { Routes } from '../../../../router/Routes';

const SinglePhone: FC = (): JSX.Element | null => {
    const { productId } = useParams();

    const { data: singlePhone } = useGetSinglePhoneQuery(Number(productId));
    
    if (singlePhone) {
        return <ProductDetails 
                    productRoute={`${Routes.PRODUCTS}${Routes.PHONES}`} 
                    productName='Phone' 
                    product={singlePhone} 
                    category='phones'
                />
    }

    return <Spinner/>;
}

export default SinglePhone