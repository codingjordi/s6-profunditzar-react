import React, { useState } from 'react'
import Card from './components/Card'
import { Servei } from './lib/Serveis'

export default function CardList({ array }: { array: Servei[] }) {
  const [isDiscounted, setIsDiscounted] = useState<boolean>(false)

  const handleToggleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDiscounted(e.target.checked)
  }

  return (
    <div className='w-full grid place-items-center gap-8 my-3'>
      <div className='flex justify-center'>
        <p>Pagament mensual</p>
        <label className="relative inline-flex items-center cursor-pointer mx-2">
          <input type="checkbox" checked={isDiscounted} onChange={handleToggleChange} className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-green-500 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-500 transition-colors duration-300"></div>
          <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transform transition-transform duration-300 peer-checked:translate-x-5"></div>
        </label>
        <p>Pagament anual</p>
      </div>

      {array.map((servei: Servei) => (
        <Card
          key={servei.title}
          title={servei.title}
          description={servei.description}
          price={isDiscounted ? servei.price * 0.8 : servei.price}
          isDiscounted={isDiscounted}
          hasAditionalInputs={servei.hasAditionalInputs}
        />
      ))}
    </div>
  )
}
