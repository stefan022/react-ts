import React, { FC } from 'react'
import { firstCapitalLatter } from '../../../../utils/helpers/capitalFirstLetter';

interface IProps {
    uniqueBrands: string[];
}

const FilterBrands: FC<IProps> = ({ uniqueBrands }): JSX.Element => {
    return (
        <div className='border border-b-gray-400 p-4'>
            <form className="flex flex-col items-start">
                <p className='mb-2 text-gray-400'>Brands</p>
                {
                    uniqueBrands.length > 0 ? (
                        uniqueBrands.map((brand, index) => {
                            return (
                                <div key={index} className='flex items-center'>
                                    <input type="checkbox" id="apple" />
                                    <label className='ml-2' htmlFor="apple">{firstCapitalLatter(brand)}</label>
                                </div>
                            )
                        })
                    ) : null
                }
            </form>
        </div>
    )
}

export default FilterBrands