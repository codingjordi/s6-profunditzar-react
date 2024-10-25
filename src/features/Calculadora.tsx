import React from 'react'
import CardList from '../CardList'
import { serveis } from '../lib/Serveis'
import TotalPrice from '../TotalPrice'

export default function Calculadora() {
  return (
    <div>
      <div className='flex justify-center items-center max-w-screen-xl mx-auto h-48 xl:rounded-3xl bg-center hero-img'>
        <p className='text-5xl text-gray-50 backdrop-blur-[2px] p-5'>
          Aconsegueix la millor qualitat
        </p>
      </div>

      <div className="max-w-screen-xl mx-auto">
        <div className='grid place-items-center my-9 gap-10'>
          <CardList array={serveis}></CardList>
        </div>
        <TotalPrice></TotalPrice>
      </div>
    </div>

  )
}
