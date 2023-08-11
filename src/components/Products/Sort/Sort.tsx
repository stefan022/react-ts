import React, { FC, ChangeEvent, useEffect } from 'react'

import { sortOptions } from '../../../constants/sortOptions';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { SORT_BY } from '../../../features/slices/sortProductsSlice';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { RootState } from '../../../ts/types/RootState';
import { SortBy } from '../../../ts/types/SortBy';

const Sort: FC = (): JSX.Element => {
    const { filteredProducts } = useAppSelector((state: RootState) => state.filters);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(SORT_BY({
            sortBy: "recommended",
            products: filteredProducts
        }));

        // eslint-disable-next-line
    }, [filteredProducts]);

    const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => { 
        dispatch(SORT_BY({
            sortBy: e.target.value as SortBy,
            products: filteredProducts
        }));
    };

    return (
        <div className='flex'>
            <p>Sort by: </p>
            <select 
                className='ml-2' 
                id="sortProducts" 
                onChange={handleSortChange}
                defaultValue={"recommended"}
            >
                {
                    sortOptions.map((singleOption) => {
                        const { optionId, optionValue, text } = singleOption;

                        return <option key={optionId} value={optionValue}>{text}</option>
                    })
                }
            </select>
        </div>
  )
}

export default Sort