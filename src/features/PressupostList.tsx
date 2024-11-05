    import React, { useEffect, useState } from 'react'
    import PressupostCard from '../components/PressupostCard'
    import { useProduct } from '../hooks/useProduct'
    import { Pressupost } from '../context/ProductContext';

    export default function PressupostList() {
        const { pressupostos } = useProduct();

        const [sortedPressupostos, setSortedPressupostos] = useState<Pressupost[]>([])

        useEffect(() => {
            setSortedPressupostos(pressupostos);
        }, [pressupostos]);


        const handleSortAbc = () => {
            const sortedPressupostos = [...pressupostos].sort((a, b) => 
                a.name.localeCompare(b.name)
            );
            setSortedPressupostos(sortedPressupostos);
        }

        const handleSortDate = () => {
            const sortedPressupostos = [...pressupostos].sort((a, b) =>
                a.date - b.date
            );
            setSortedPressupostos(sortedPressupostos)
        }

        const handleRestartOrder = () => {
            setSortedPressupostos(pressupostos)
        }

        return (
            <div className='flex flex-col items-center gap-4 justify-center w-3/4 py-7'>
                <div className='mr-auto'>
                    <h2>
                        Pressupostos en curs:
                    </h2>
                </div>
                <div className='flex gap-4 ml-auto pr-3'>
                        <button className='font-medium rounded-lg p-2' onClick={handleSortDate}>Data</button>
                        <button className='font-medium rounded-lg p-2' onClick={handleSortAbc}>Nom</button>
                        <button onClick={handleRestartOrder}>Por defecto</button>
                    </div>
                {sortedPressupostos.map(pressupost => {
                    return <PressupostCard pressupost={pressupost}/>
                })}
                
            </div>
        )
    }