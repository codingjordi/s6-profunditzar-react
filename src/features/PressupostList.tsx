import React, { useEffect, useState } from 'react'
import PressupostCard from '../components/PressupostCard'
import { useProduct } from '../hooks/useProduct'
import { Pressupost } from '../context/ProductContext';

export default function PressupostList() {
    const { pressupostos } = useProduct();

    const [sortedPressupostos, setSortedPressupostos] = useState<Pressupost[]>([])
    const [query, setQuery] = useState('');

    useEffect(() => {
        setSortedPressupostos(pressupostos);
    }, [pressupostos]);

    const handleSortAbc = () => {
        const sorted = [...pressupostos].sort((a, b) =>
            a.name.localeCompare(b.name)
        );
        setSortedPressupostos(sorted);
    }

    const handleSortDate = () => {
        const sorted = [...pressupostos].sort((a, b) =>
            a.date - b.date
        );
        setSortedPressupostos(sorted)
    }

    const handleRestartOrder = () => {
        setSortedPressupostos(pressupostos)
    }

    const handleSearchQuery = (e) => { /* esta bien hecho o es un poco marranada? */
        setQuery(e.target.value)
        if(query === null || '') {
            return setSortedPressupostos(pressupostos)
        }
        setSortedPressupostos(
            pressupostos.filter(pressupost => {
                return pressupost.name.toLowerCase().includes(e.target.value.toLowerCase())  /* si lo hago con query.toLowerCase no funciona bien, por que? tiene que ver con  el ciclo de render*/
            })
        )
    }

    return (
        <div className='flex flex-col items-center gap-4 justify-center w-3/4 py-7'>
            <div className='mr-auto'>
                <h2>
                    Pressupostos en curs:
                </h2>
            </div>
            <div className='flex items-center gap-4 ml-auto pr-3'>
                <svg xmlns="http://www.w3.org/2000/svg" height={20} viewBox="0 0 512 512"><path fill="#858585" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                <input className='w-40 rounded border border-[#858585] px-2 py-1 focus:outline-none' id='buscador-pressupostos' value={query} onChange={handleSearchQuery} type="text" placeholder='Buscar per nom...'/>
                <button className='font-medium rounded-lg p-2 active:underline' onClick={handleSortDate}>Data</button>
                <button className='font-medium rounded-lg p-2 active:underline' onClick={handleSortAbc}>Nom</button>
                <p>|</p>
                <button className='active:underline' onClick={handleRestartOrder}>Per defecte</button>
            </div>
            {sortedPressupostos.map(pressupost => {
                return <PressupostCard pressupost={pressupost} />
            })}

        </div>
    )
}