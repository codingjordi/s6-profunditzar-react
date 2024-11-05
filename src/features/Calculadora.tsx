import React from 'react'
import CardList from '../CardList'
import { serveis } from '../lib/Serveis'
import TotalPrice from '../TotalPrice'
import SavePresupost from './SavePresupost'
import PressupostList from './PressupostList'
import { useProduct } from '../hooks/useProduct'

export default function Calculadora() {


    const { pressupostos } = useProduct();

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
        <div className="flex justify-center items-end">
          <TotalPrice></TotalPrice>
        </div>
        <div className='flex flex-col items-center justify-center'>
           <SavePresupost />
           {pressupostos.length !== 0 && <PressupostList />}
        </div>
      </div>
    </div>
  )
}
