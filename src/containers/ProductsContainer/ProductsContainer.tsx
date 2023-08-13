import React, { FC } from 'react'

import { CardsView, ListsView, ProductsSearch, Sort, View } from '../../components';
import { useAppSelector } from '../../hooks/useAppSelector';
import { RootState } from '../../ts/types/RootState';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { VIEW_CHANGE } from '../../features/slices/viewSlice';

const ProductsContainer: FC = (): JSX.Element => {
    const { view } = useAppSelector((state: RootState) => state.view);
    const dispatch = useAppDispatch();

    const handleChangeProductsView = (view: "grid" | "list") => {
        dispatch(VIEW_CHANGE(view));
    };

    return (
        <div className='w-5/6 border border-gray-400'>
            <div className='border border-b-gray-300'>
                <div className='flex justify-between items-center'>
                    <ProductsSearch/>
                    <div className='flex items-center gap-4'>
                        <View
                            activeView={view}
                            handleChangeProductsView={handleChangeProductsView}
                        />
                        <Sort/>
                    </div>
                </div>
            </div>
            {
                view === "grid" 
                    ? <CardsView category='phones'/>
                    : <ListsView category='phones'/>
            }
        </div>
    )
}

export default ProductsContainer