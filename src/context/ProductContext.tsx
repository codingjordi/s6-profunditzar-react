import React, { createContext, useState } from 'react';

interface ProductContextType {
    product: {
        price: number;
        pages: number;
        languages: number;
        totalPrice: number;
    };
    setProduct: React.Dispatch<React.SetStateAction<{
        price: number;
        pages: number;
        languages: number;
        totalPrice: number;
    }>>;
}

export const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState({
        price: 0,
        pages: 0,
        languages: 0,
        totalPrice: 0,
    });

    return (
        <ProductContext.Provider value={{ product, setProduct }}>
            {children}
        </ProductContext.Provider>
    );
};
