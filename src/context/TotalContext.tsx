import React, { useState, createContext } from 'react'

interface Details {
  pages: number;
  languages: number;
}

interface TotalContextType {
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  details: Details; 
  setDetails: React.Dispatch<React.SetStateAction<Details>>;  
}

export const TotalContext = createContext<TotalContextType | null>(null);

export default function TotalProvider({ children }) {

  const [total, setTotal] = useState(0)

  const [details, setDetails] = useState(
    {
      pages: 0,
      languages: 0
    }
  )

  return (
    <div>
      <TotalContext.Provider value={{ total, setTotal, details, setDetails }}>
        {children}
      </TotalContext.Provider>
    </div>
  )
}
