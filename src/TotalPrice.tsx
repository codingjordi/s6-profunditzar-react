import React from 'react'
import { useTotal } from './hooks/useTotal';

export default function TotalPrice() {

  const { total } = useTotal();

  return (
    <div className="flex gap-4 items-baseline justify-end text-3xl font-bold">
        <p>Preu pressuposat: </p>
        <p className='text-4xl'>{total}€</p>
    </div>
  )
}
