import React from 'react'
import { CardsView, ListsView, ProductsSearch, Sort, View } from '../../components';



const ProductsContainer = () => {
    const [ activeView, setActiveView ] = React.useState<string>("grid");

    const handleChangeProductsView = (view: string) => setActiveView(view);

    return (
        <div className='w-5/6 border border-gray-400'>
            <div className='border border-b-gray-300'>
                <div className='flex justify-between items-center'>
                    <ProductsSearch/>
                    <div className='flex items-center gap-4'>
                        <View
                            activeView={activeView}
                            handleChangeProductsView={handleChangeProductsView}
                        />
                        <Sort/>
                    </div>
                </div>
            </div>
            {
                activeView === "grid" 
                    ? <CardsView category='phones'/>
                    : <ListsView category='phones'/>
            }
        </div>
    )
}

export default ProductsContainer