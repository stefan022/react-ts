import React, { FC } from 'react'
import { Banner, ProductsFilter, ProductsSearch, ProductsSort, View, CardsView, ListsView } from '../../../components'

import Container from '../../../containers/Container/Container';
import phones from "../../../assets/phones.png";

const Phones: FC = (): JSX.Element => {
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
            <Container>
                <div className='flex w-full gap-6 pt-6'>
                    <ProductsFilter/>
                    <div className='w-5/6 border border-gray-400'>
                        <div className='border border-b-gray-300'>
                            <div className='flex justify-between items-center'>
                                <ProductsSearch/>
                                <div className='flex items-center gap-4'>
                                    <View
                                        handleChangeProductsView={handleChangeProductsView}
                                    />
                                    <ProductsSort/>
                                </div>
                            </div>
                        </div>
                        {
                            currentView === "grid" 
                                ? <CardsView category='phones'/>
                                : <ListsView/>
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Phones