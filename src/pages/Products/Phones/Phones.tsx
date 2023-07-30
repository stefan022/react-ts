import React from 'react'
import { Banner, ProductsFilter, ProductsSearch, ProductsSort, ProductsView, ProductsGrid, ProductsList } from '../../../components'

import phones from "../../../assets/phones.png";
import ContentMiddle from '../../../content/ContentMiddle';

const Phones = () => {
    const [ currentView, setCurrentView ] = React.useState<string>("grid");

    const handleChangeProductsView = (view: string) => setCurrentView(view);

    return (
        <div>
            <Banner
                title="Phones"
                bgPosition="bg-center"
                bgNoRepeat="bg-no-repeat"
                image={phones}
            />
            <ContentMiddle>
                <div className='flex w-full gap-6 pt-6'>
                    <ProductsFilter/>
                    <div className='w-5/6 border border-gray-400'>
                        <div className='border border-b-gray-300'>
                            <div className='flex justify-between items-center'>
                                <ProductsSearch/>
                                <div className='flex items-center gap-4'>
                                    <ProductsView
                                        handleChangeProductsView={handleChangeProductsView}
                                    />
                                    <ProductsSort/>
                                </div>
                            </div>
                        </div>
                        {
                            currentView === "grid" 
                                ? <ProductsGrid/>
                                : <ProductsList/>
                        }
                    </div>
                </div>
            </ContentMiddle>
        </div>
    )
}

export default Phones