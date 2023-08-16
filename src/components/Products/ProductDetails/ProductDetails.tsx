import React, { FC, useEffect } from 'react'

import { Banner, ProductImages, ProductInformation, ProductRatings, ProductReviews, ProductButtons, ProductSpecifications } from '../..'
import Container from '../../../containers/Container/Container'
import { IProduct } from '../../../ts/interfaces/IProduct/IProduct';
import { IScreen } from '../../../ts/interfaces/IProduct/IScreen';
import { Routes } from '../../../router/Routes';

interface IProps {
    productName: string;
    productRoute: string;
    product: IProduct<IScreen | string>;
    category: string;
}

const ProductDetails: FC<IProps> = ({ productName, productRoute, product, category }): JSX.Element => {
    const { articleId, articleName, rating, status, model, timestamp, brand, price, colors, images, discount } = product;

    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <div>
            <Banner
                title={`${productName} Details`}
                navigation={[
                    {
                        navigationName: "Products",
                        route: Routes.PRODUCTS
                    },
                    {
                        navigationName: `${productName}s`,
                        route: productRoute
                    },
                    {
                        navigationName: `${productName} details`,
                    },
                ]}
            />
            <Container>
                <div className='flex py-6'>
                    <div className='w-1/2'>
                        <ProductImages images={images} />
                        <ProductButtons/>
                    </div>
                    <div className='w-1/2 border border-gray p-6 h-[525px]'>
                        <ProductInformation
                            articleName={articleName}
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
                    product={product}
                    category={category}
                />
                <ProductRatings
                    totalRatings={1}
                    averageRating={rating}
                />
                <ProductReviews
                    articleId={articleId}
                />
            </Container>
        </div>
    )
}

export default ProductDetails