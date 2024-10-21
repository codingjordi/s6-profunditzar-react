import React, { useContext } from 'react'
import { useTotal } from '../hooks/useTotal';

export default function Card({ title, description, price }) {

    const { total, setTotal } = useTotal();

    const handleCheckboxChange = (e) => {
        if(e.target.checked) {
            setTotal(t => t + price)
        } else {
            setTotal(t => t- price)
        }
    }

    return (
        <div className='grid grid-cols-3 shadow-lg rounded p-9 w-3/4 items-center'>
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
                <input className='mr-3 scale-150' onChange={handleCheckboxChange} type='checkbox' id='afegir' name='afegir'></input>
                <label htmlFor="" className='text-xl'>Afegir</label>
            </div>
        </div>
    )
}
