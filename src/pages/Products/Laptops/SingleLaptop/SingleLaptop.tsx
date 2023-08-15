import React, { FC } from 'react'

import { ProductDetails, Spinner } from "../../../../components"
import { useParams } from 'react-router-dom';
import { useGetSingleLaptopQuery } from '../../../../features/API/laptopsAPI';

const SingleLaptop: FC = (): JSX.Element | null => {
    const { productId } = useParams();

    const { data: singleLaptop } = useGetSingleLaptopQuery(Number(productId));
    
    if (singleLaptop) {
        return <ProductDetails product={singleLaptop} category='laptops'/>
    }

    return <Spinner/>;
}

export default SingleLaptop