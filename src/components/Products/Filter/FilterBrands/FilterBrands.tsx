import React, { FC } from 'react'
import { firstCapitalLatter } from '../../../../utils/helpers/capitalFirstLetter';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { RootState } from '../../../../ts/types/RootState';

interface IProps {
    uniqueBrands: string[];
}

const FilterBrands: FC<IProps> = ({ uniqueBrands }): JSX.Element => {
    const { filtersChecked } = useAppSelector((state: RootState) => state.filters);

    return (
        <div className='border border-b-gray-400 p-4'>
            <div className="flex flex-col items-start">
                <p className='mb-2 text-gray-400'>Brands</p>
                {
                    uniqueBrands.length > 0 ? (
                        uniqueBrands.map((brand, index) => {
                            return (
                                <div key={index} className='flex items-center mb-1'>
                                    <input 
                                        type="checkbox" 
                                        id={brand} 
                                        defaultChecked={filtersChecked[brand]}
                                    />
                                    <label className='ml-2' htmlFor={brand}>{firstCapitalLatter(brand)}</label>
                                </div>
                            )
                        })
                    ) : null
                }
            </div>
        </div>
    )
}

export default FilterBrands