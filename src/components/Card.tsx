import React, { useContext, useState } from 'react'
import { useProduct } from '../hooks/useProduct'

export default function Card({ title, description, price, hasAditionalInputs }) {

    const { product, setProduct } = useProduct();
    const [isChecked, setIsChecked] = useState(false)

    const handlePagesChange = (e) => {
        setProduct({
            ...product,
            pages: parseInt(e.target.value) || 0
        })
    }

    const handleLanguagesChange = (e) => {
        setProduct({
            ...product,
            languages: parseInt(e.target.value) || 0
        })
    }

    const handleCheckboxChange = (e) => {
        if (e.target.checked) {
            setProduct({
                ...product,
                totalPrice: product.totalPrice + price
            })
            setIsChecked(true)
        } else {
            setProduct({
                ...product,
                pages: 0,
                languages: 0,
                totalPrice: product.totalPrice - price
            })
            setIsChecked(false)
        }
    }

    return (
        <div className={`shadow-lg rounded p-9 w-3/4 ${isChecked && 'border border-blue-600'}`}>
            <div className='grid grid-cols-3 items-center'>
                <div className='flex justify-start items-center'>
                    <div>
                        <h2 className='text-2xl font-semibold'>{title}</h2>
                        <p>{description}</p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <p className='text-3xl font-bold'>{price}€</p>
                </div>
                <div className='flex justify-end items-center'>
                    <input
                        className='mr-3 scale-150'
                        type='checkbox'
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        id='afegir'
                        name='afegir'
                    />
                    <label htmlFor="" className='text-xl'>Afegir</label>
                </div>
            </div>

            {isChecked && hasAditionalInputs && (
                <div className='flex flex-col gap-y-2 items-end mt-3'>
                    <div className='flex items-center'>
                        <label htmlFor="" className='mr-3'>Número de pàgines: </label>
                        <button className="flex items-center px-1 h-5 rounded-full border-2 border-gray-400" onClick={() =>
                            setProduct(
                                {
                                    ...product,
                                    pages: product.pages > 0 ? product.pages - 1 : 0,
                                }
                            )}>
                            −
                        </button>
                        <input
                            className='mx-1 w-14 text-center border-2 border-gray-400 rounded-md'
                            onChange={handlePagesChange}
                            type="number"
                            value={product.pages}
                        />
                        <button className="flex items-center px-1 h-5 rounded-full border-2 border-gray-400" onClick={() => 
                            setProduct(
                                {
                                    ...product,
                                    pages: product.pages + 1
                                }
                            )}>
                            +
                        </button>
                    </div>
                    <div className='flex items-center'>
                        
                        <label htmlFor="" className='mr-3'>Número de llenguatges: </label>
                        <button className="flex items-center px-1 h-5 rounded-full border-2 border-gray-400" onClick={() =>
                            setProduct(
                                {
                                    ...product,
                                    languages: product.languages > 0 ? product.languages - 1 : 0,
                                }
                            )}>
                            −
                        </button>
                        <input
                            className='mx-1 w-14 text-center border-2 border-gray-400 rounded-md'
                            onChange={handleLanguagesChange}
                            type="number"
                            value={product.languages}
                        />
                        <button className="flex items-center px-1 h-5 rounded-full border-2 border-gray-400" onClick={() => 
                            setProduct(
                                {
                                    ...product,
                                    languages: product.languages + 1
                                }
                            )}>
                            +
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
