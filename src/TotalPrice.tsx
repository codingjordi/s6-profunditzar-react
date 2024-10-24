import React from 'react'
import { useProduct } from './hooks/useProduct'

export default function TotalPrice() {

  const { product } = useProduct();

  return (
    <div className="flex gap-4 items-baseline justify-end text-3xl font-bold">
        <p>Preu pressuposat: </p>
        <p className='text-4xl'>{ (product.pages !== 0 || product.languages !== 0) ? (((product.pages + product.languages) * 30) + product.totalPrice) : product.totalPrice} €</p>
    </div>
  )
}
