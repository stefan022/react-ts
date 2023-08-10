import React, { FC } from 'react'

import { useGetPhonesQuery } from '../../../../../features/API/phonesAPI';
import { useAppSelector } from '../../../../../hooks/useAppSelector';
import { RootState } from '../../../../../ts/types/RootState';
import { IPhone } from '../../../../../ts/interfaces/IProducts/IPhone';

import { SinglePhoneList } from "../../../../../components"

const PhoneLists: FC = (): JSX.Element => {
    useGetPhonesQuery();
    const { phones } = useAppSelector((state: RootState) => state.phones);

    return (
        <>
            {
                phones ?
                phones.map((phone: IPhone) => {
                    const { phoneId, phoneName, status, colors, price, rating, images } = phone;

                    return (
                        <SinglePhoneList
                            key={phoneId}
                            phoneId={phoneId}
                            phoneName={phoneName}
                            description='$desc'
                            colors={colors}
                            price={price}
                            rating={rating}
                            status={status}
                            images={images}
                        />
                    )
                }) : <p>Loading..</p>
            }
        </>
    )
}

export default PhoneLists