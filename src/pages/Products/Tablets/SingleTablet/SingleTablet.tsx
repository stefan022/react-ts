import React, { FC } from 'react'

import { ProductDetails, Spinner } from "../../../../components"
import { useParams } from 'react-router-dom';
import { useGetSingleTabletQuery } from '../../../../features/API/tabletsAPI';

const SingleTablet: FC = (): JSX.Element | null => {
    const { productId } = useParams();

    const { data: singleTablet } = useGetSingleTabletQuery(Number(productId));
    
    if (singleTablet) {
        return <ProductDetails product={singleTablet} category='tablets'/>
    }

    return <Spinner/>;
}

export default SingleTablet