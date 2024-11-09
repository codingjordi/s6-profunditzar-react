import React from 'react'

export default function PressupostCard({ pressupost }) {

    return (
        <div className='shadow-lg rounded-2xl p-9 w-full border'>
            <div className='grid grid-cols-3 items-center '>
                <div className='flex justify-start items-center'>
                    <div>
                        <h2 className='text-2xl font-semibold'>{pressupost.name}</h2>
                        <p>{pressupost.email}</p>
                        <p>{pressupost.phoneNumber}</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='font-bold underline text-lg'>Serveis contractats</p>
                    <ul>
                        {pressupost.products.map(product => {
                            return (
                            <li className='list-disc font-medium'>
                                {product.title}
                            </li>
                            )
                        })}
                    </ul>
                </div>
                <div className='flex flex-col justify-center items-end'>
                    <div className='text-center'>
                        <p>Total:</p>
                        <p className='text-4xl font-bold'>{pressupost.cartPrice}€</p>
                    </div>
                </div>
            </div>
        </div>
    );
}