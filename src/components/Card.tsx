import React, { useContext, useState } from 'react'
import { useTotal } from '../hooks/useTotal';

export default function Card({ title, description, price }) {

    const { setTotal, setDetails, details } = useTotal();
    const [isChecked, setIsChecked] = useState(false)
    

    const handlePagesChange = (e) => {
        setDetails(
            {
                ...details,
                pages: e.target.value

            }
        )
    }

    const handleLanguagesChange = (e) => {
        setDetails(
            {
                ...details,
                languages: e.target.value

            }
        )
    }

    const handleCheckboxChange = (e) => {
        if (e.target.checked) {
            setTotal(t => t + price)
            setIsChecked(true)
        } else {
            setTotal(t => t - price)
            setIsChecked(false)
        }
    }


    return (
        <div className="shadow-lg rounded p-9 w-3/4">
            <div className='grid grid-cols-3  items-center'>
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
                    <input className='mr-3 scale-150' type='checkbox' checked={isChecked} onChange={handleCheckboxChange}  id='afegir' name='afegir'></input>
                    <label htmlFor="" className='text-xl'>Afegir</label>
                </div>

            </div>
            {isChecked &&
                <div className='flex flex-col gap-y-2 items-end'>
                    <div className='flex'>
                        <label htmlFor="">Número de pàgines: </label>
                        <input className='ml-4 w-14 text-center border-2 border-gray-300 rounded-md' onChange={handlePagesChange} type="number" />
                    </div>
                    <div className='flex'>
                        <label htmlFor="">Número de llenguatges: </label>
                        <input className='ml-4 w-14 text-center border-2 border-gray-300 rounded-md' onChange={handleLanguagesChange} type="number" />
                    </div>
                </div>}

        </div>
    )
}
