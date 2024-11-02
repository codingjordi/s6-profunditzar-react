import React from 'react'
import PressupostCard from '../components/PressupostCard'
import { useProduct } from '../hooks/useProduct'

export default function PressupostList() {

    const { pressupostos } = useProduct();

    return (
        <div className='flex flex-col-reverse items-center justify-center w-full py-7'>
            {pressupostos.map(pressupost => {
                return <PressupostCard pressupost={pressupost}/>
            })}
        </div>
    )
}