import React from 'react'

import { IPhone } from '../../../../../ts/interfaces/IProducts/IPhone'
import { SinglePhoneCard } from "../../../../../components";
import { RootState } from '../../../../../ts/types/RootState';
import { useAppSelector } from '../../../../../hooks/useAppSelector';

const PhoneCards = () => {
    const { phones } = useAppSelector((state: RootState) => state.phones);

    return (
        <>
            {
                phones ?
                phones.map((phone: IPhone) => {
                    const { phoneId, phoneName, colors, price, rating, images } = phone;

                    return (
                        <SinglePhoneCard
                            key={phoneId}
                            phoneId={phoneId}
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