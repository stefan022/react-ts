import React, { FC } from 'react'

import { ProductDetails, Spinner } from "../../../../components"
import { useParams } from 'react-router-dom';
import { useGetSinglePhoneQuery } from '../../../../features/API/phonesAPI';

const SinglePhone: FC = (): JSX.Element | null => {
    const { productId } = useParams();

    const { data: singlePhone } = useGetSinglePhoneQuery(Number(productId));
    
    if (singlePhone) {
        return <ProductDetails product={singlePhone} category='phones'/>
    }

    return <Spinner/>;
}

export default SinglePhone