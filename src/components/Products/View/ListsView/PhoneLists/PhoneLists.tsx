import React from 'react'

import { useGetPhonesQuery } from '../../../../../features/API/phonesAPI';
import { useAppSelector } from '../../../../../hooks/useAppSelector';
import { RootState } from '../../../../../ts/types/RootState';
import { IPhone } from '../../../../../ts/interfaces/IProducts/IPhone';

import { SinglePhoneList } from "../../../../../components"

interface IProps {
    rating: number;
    status: string;
    productName: string;
    description: string;
    price: string;
    colors: string[];
}

const ProductPhoneLists = ({ rating, status, productName, description, price, colors }: IProps) => {
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
                        <SinglePhoneList
                            key={phoneId}
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

export default ProductPhoneLists