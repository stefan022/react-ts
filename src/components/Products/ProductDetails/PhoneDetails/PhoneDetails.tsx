import React, { FC } from 'react'

import { Banner, ProductImages, ProductInformation, ProductRatings, ProductReviews, ProductSpecifications, ProductButtons } from '../../..'
import Container from '../../../../containers/Container/Container'
import { IPhone } from '../../../../ts/interfaces/IProducts/IPhone';

interface IProps {
    product: IPhone;
}

const PhoneDetails: FC<IProps> = ({ product }): JSX.Element => {
    const { phoneId, phoneName, rating, status, model, timestamp, brand, price, colors, images, screen, memory, camera, battery, discount } = product;

    return (
        <div>
            <Banner
                title="Product Details"
            />
            <Container>
                <div className='flex py-6'>
                    <div className='w-1/2'>
                        <ProductImages images={images} />
                        <ProductButtons/>
                    </div>
                    <div className='w-1/2 border border-gray p-6 h-[525px]'>
                        <ProductInformation
                            articleName={phoneName}
                            rating={rating}
                            status={status}
                            model={model}
                            timestamp={timestamp}
                            brand={brand}
                            price={price}
                            colors={colors}
                            discount={discount}
                        />
                    </div>
                </div>
                <ProductSpecifications
                    camera={camera}
                    battery={battery}
                    memory={memory}
                    screen={screen}
                />
                <ProductRatings
                    totalRatings={1}
                    averageRating={rating}
                />
                <ProductReviews
                    phoneId={phoneId}
                />
            </Container>
        </div>
    )
}

export default PhoneDetails