import React from 'react';
import { useProduct } from './hooks/useProduct';

export default function TotalPrice() {
  const { cart, totalPrice } = useProduct();

  console.log(cart)

  return (
    <div className="flex gap-4 items-baseline justify-end text-3xl font-bold w-3/4">
      <p>Preu pressuposat: </p>
      <p className='text-4xl'>{totalPrice}€</p>
    </div>
  );
}
