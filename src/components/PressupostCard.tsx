import React from 'react'

export default function PressupostCard({ pressupost }) {

    return (
        <div className='shadow-lg rounded-2xl p-9 w-full border'>
            <div className='grid md:grid-cols-3 items-start md:items-center '>
                <div className='flex justify-start items-center'>
                    <div className=''>
                        <h2 className='text-2xl font-semibold'>{pressupost.name}</h2>
                        <p>{pressupost.email}</p>
                        <p>{pressupost.phoneNumber}</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center md:items-center'>
                    <p className='font-bold underline text-lg'>Serveis contractats</p>
                    <ul className='pl-4'>
                        {pressupost.products.map(product => {
                            return (
                            <li className='list-disc font-medium'>
                                {product.title} {product.pages && product.pages} 
                            </li>
                            )
                        })}
                    </ul>
                </div>
                <div className='md:flex flex-col justify-center items-end'>
                    <div className='flex gap-2 items-baseline md:block text-center'>
                        <p>Total:</p>
                        <p className='text-4xl font-bold'>{pressupost.cartPrice}€</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
}