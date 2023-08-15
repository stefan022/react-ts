import React, { FC } from 'react'

import { ProductDetails, Spinner } from "../../../../components"
import { useParams } from 'react-router-dom';
import { useGetSingleTelevisionQuery } from '../../../../features/API/televisionsAPI';

const SingleTelevision: FC = (): JSX.Element | null => {
    const { productId } = useParams();

    const { data: singleTelevision } = useGetSingleTelevisionQuery(Number(productId));
    
    if (singleTelevision) {
        return <ProductDetails product={singleTelevision} category='televisions'/>
    }

    return <Spinner/>;
}

export default SingleTelevision