import React, { FC } from 'react'

import { Banner, Filter, ProductsSearch, ProductsSort, View, CardsView, ListsView } from '../../../components'
import { useGetPhonesQuery } from '../../../features/API/phonesAPI';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { RootState } from '../../../ts/types/RootState';

import Container from '../../../containers/Container/Container';
import phonesImage from "../../../assets/phones.png";

const Phones: FC = (): JSX.Element => {
    useGetPhonesQuery();
    const { phones } = useAppSelector((state: RootState) => state.phones);

    const [ currentView, setCurrentView ] = React.useState<string>("grid");
    const handleChangeProductsView = (view: string) => setCurrentView(view);

    return (
        <div>
            <Banner
                title="Phones"
                bgPosition="bg-center"
                bgNoRepeat="bg-no-repeat"
                image={phonesImage}
            />
            <Container>
                <div className='flex w-full gap-6 pt-6'>
                    <Filter products={phones}/>
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
                                : <ListsView category='phones'/>
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Phones