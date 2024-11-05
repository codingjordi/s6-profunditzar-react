import React, { createContext, useEffect, useState } from 'react';

interface Product {
  title: string;
  price: number;
  pages: number;
  languages: number;
  totalPrice: number;
}

export interface Pressupost {
  name: string,
  email: string,
  phoneNumber: number,
  products: string[],
  cartPrice: number,
  date: number
}

interface ProductContextType {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  totalPrice: number;
  pressupostos: any[];
  setPressupostos: React.Dispatch<React.SetStateAction<Pressupost[]>>;
}

export const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [pressupostos, setPressupostos] = useState<Pressupost[]>([]);

  useEffect(() => {
    const total = cart.reduce((acc, product) => acc + product.totalPrice, 0);
    setTotalPrice(total);
  }, [cart]);

  return (
    <ProductContext.Provider value={{ cart, setCart, totalPrice, pressupostos, setPressupostos }}>
      {children}
    </ProductContext.Provider>
  );
};