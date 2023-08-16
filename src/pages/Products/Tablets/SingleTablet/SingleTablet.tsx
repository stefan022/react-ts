import React, { FC } from 'react'

import { ProductDetails, Spinner } from "../../../../components"
import { useParams } from 'react-router-dom';
import { useGetSingleTabletQuery } from '../../../../features/API/tabletsAPI';
import { Routes } from '../../../../router/Routes';

const SingleTablet: FC = (): JSX.Element | null => {
    const { productId } = useParams();

    const { data: singleTablet } = useGetSingleTabletQuery(Number(productId));
    
    if (singleTablet) {
        return <ProductDetails 
                    productRoute={`${Routes.PRODUCTS}${Routes.TABLETS}`}
                    productName='Tablet' 
                    product={singleTablet} 
                    category='tablets'
                />
    }

    return <Spinner/>;
}

export default SingleTablet