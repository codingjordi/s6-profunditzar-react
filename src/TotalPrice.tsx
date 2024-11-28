import React from 'react';
import { useProduct } from './hooks/useProduct';

export default function TotalPrice() {
  const { cart, totalPrice } = useProduct();

  console.log(cart)

  return (
    <div className="flex gap-4 items-baseline justify-end font-bold w-3/4">
      <p className='text-xl md:text-3xl'>Preu pressuposat: </p>
      <p className='text-xl md:text-3xl'>{totalPrice}€</p>
    </div>
  );
}
