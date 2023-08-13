import React, { FC } from 'react'

import { PhoneDetails, Spinner } from "../../../../components"
import { useParams } from 'react-router-dom';
import { useGetSinglePhoneQuery } from '../../../../features/API/phonesAPI';

const SinglePhone: FC = (): JSX.Element | null => {
    const { productId } = useParams();

    const { data: singlePhone } = useGetSinglePhoneQuery(+productId!);
    
    if (singlePhone) {
        return <PhoneDetails product={singlePhone}/>
    }

    return <Spinner/>;
}

export default SinglePhone