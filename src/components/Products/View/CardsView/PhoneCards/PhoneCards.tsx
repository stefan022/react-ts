import React from 'react'

import { IPhone } from '../../../../../ts/interfaces/IProducts/IPhone'
import { SinglePhoneCard } from "../../../../../components";
import { RootState } from '../../../../../ts/types/RootState';
import { useAppSelector } from '../../../../../hooks/useAppSelector';
import { useGetPhonesQuery } from '../../../../../features/API/phonesAPI';

const PhoneCards = () => {
    useGetPhonesQuery();
    const { phones } = useAppSelector((state: RootState) => state.phones);

    return (
        <>
            {
                phones ?
                phones.map((phone: IPhone) => {
                    const { phoneId, phoneName, colors, price, rating, images } = phone;

                    const set = new Set(colors);
                    console.log(set);

                    return (
                        <SinglePhoneCard
                            key={phoneId}
                            phoneName={phoneName}
                            colors={colors}
                            price={price}
                            rating={rating}
                            images={images}
                        />
                    )
                }) : <p>Loading..</p>
            }
        </>
    )
}

export default PhoneCards