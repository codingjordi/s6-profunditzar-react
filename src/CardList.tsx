import React from 'react'
import Card from './components/Card'
import { Servei } from './lib/Serveis'

export default function CardList({ array }: { array: Servei[] }) {
  return (
    <div className='w-full grid place-items-center gap-4 -my-3'>
        {array.map((servei: Servei) => (
          <Card
            key={servei.title}
            title={servei.title}
            description={servei.description}
            price={servei.price}
            hasAditionalInputs={servei.hasAditionalInputs}
          />
        ))}
    </div>
  )
}