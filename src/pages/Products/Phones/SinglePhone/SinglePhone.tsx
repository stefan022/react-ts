import React, { FC } from 'react'

import { PhoneDetails } from "../../../../components"
import { useParams } from 'react-router-dom';
import { useGetSinglePhoneQuery } from '../../../../features/API/phonesAPI';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { RootState } from '../../../../ts/types/RootState';


const SinglePhone: FC = (): JSX.Element | null => {
    const { productId } = useParams();
    useGetSinglePhoneQuery(+productId!);

    const { singlePhone } = useAppSelector((state: RootState) => state.phones);

    if (singlePhone) {
        return <PhoneDetails product={singlePhone}/>
    }

    return null;
}

export default SinglePhone