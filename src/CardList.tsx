import React from 'react'
import Card from './components/Card'
import { serveis } from './lib/Serveis';

export default function CardList({ array }) {
  return (
    <div className='w-full grid place-items-center'>
        {array.map((servei) => {
          return <Card title={servei.title} description={servei.description} price={servei.price}></Card>
        })}
    </div>
  )
}
