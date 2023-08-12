import React, { FC } from 'react'

import { PhoneDetails, Spinner } from "../../../../components"
import { useParams } from 'react-router-dom';
import { useGetSinglePhoneQuery } from '../../../../features/API/phonesAPI';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { RootState } from '../../../../ts/types/RootState';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { RESET_SINGLE_PHONE } from '../../../../features/slices/phonesSlice';


const SinglePhone: FC = (): JSX.Element | null => {
    const { singlePhone } = useAppSelector((state: RootState) => state.phones);
    const { productId } = useParams();

    useGetSinglePhoneQuery(Number(productId!));
    
    const dispatch = useAppDispatch();
    
    React.useEffect(() => {
        return () => {
            dispatch(RESET_SINGLE_PHONE());
        }
        // eslint-disable-next-line
    }, [productId]);


    if (singlePhone) {
        return <PhoneDetails product={singlePhone}/>
    }

    return <Spinner/>;
}

export default SinglePhone