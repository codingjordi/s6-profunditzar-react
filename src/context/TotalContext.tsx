import React, { useState, createContext } from 'react'

interface TotalContextType {
    total: number;
    setTotal: React.Dispatch<React.SetStateAction<number>>;
}

export const TotalContext = createContext<TotalContextType | null>(null);

export default function TotalProvider({ children }) {

    const [total, setTotal] = useState(0)

  return (
    <div>
        <TotalContext.Provider value={{total, setTotal}}>
            {children}
        </TotalContext.Provider>
    </div>
  )
}
