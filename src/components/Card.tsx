import React, { useState } from 'react';
import { useProduct } from '../hooks/useProduct';

export default function Card({ title, description, price, hasAditionalInputs }) {
  const { cart, setCart } = useProduct();
  const [isChecked, setIsChecked] = useState(false);
  const [pages, setPages] = useState(0);
  const [languages, setLanguages] = useState(0);

  const handlePagesChange = (e) => {
    const newPages = parseInt(e.target.value) || 0;
    setPages(newPages);
    updateProductInCart(newPages, languages);
  };

  const handleLanguagesChange = (e) => {
    const newLanguages = parseInt(e.target.value) || 0;
    setLanguages(newLanguages);
    updateProductInCart(pages, newLanguages);
  };

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      const newProduct = {
        title,
        price,
        pages,
        languages,
        totalPrice: price + (pages + languages) * 30,
      };
      setCart([...cart, newProduct]);
      setIsChecked(true);
    } else {
      setCart(cart.filter(product => product.title !== title));
      setIsChecked(false);
    }
  };

  const handleIncrement = (type) => {
    if (type === 'pages') {
      setPages(pages + 1);
      updateProductInCart(pages + 1, languages);
    } else if (type === 'languages') {
      setLanguages(languages + 1);
      updateProductInCart(pages, languages + 1);
    }
  };

  const handleDecrement = (type) => {
    if (type === 'pages') {
      setPages(pages > 0 ? pages - 1 : 0);
      updateProductInCart(pages > 0 ? pages - 1 : 0, languages);
    } else if (type === 'languages') {
      setLanguages(languages > 0 ? languages - 1 : 0);
      updateProductInCart(pages, languages > 0 ? languages - 1 : 0);
    }
  };

  const updateProductInCart = (newPages, newLanguages) => {
    setCart(cart.map(product => {
      if (product.title === title) {
        return {
          ...product,
          pages: newPages,
          languages: newLanguages,
          totalPrice: price + (newPages + newLanguages) * 30,
        };
      }
      return product;
    }));
  };

  return (
    <div className={`shadow-lg rounded p-9 w-3/4 border-2 ${isChecked ? 'border-[#5bab8a]' : ''}`}>
      <div className='grid grid-cols-3 items-center'>
        <div className='flex justify-start items-center'>
          <div>
            <h2 className='text-2xl font-semibold'>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <p className='text-4xl font-bold'>{price}€</p>
        </div>
        <div className='flex justify-end items-center'>
          <input
            className='mr-3 scale-150 accent-[#5bab8a]'
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
            id='afegir'
            name='afegir'
          />
          <label htmlFor="" className='text-xl'>Afegir</label>
        </div>
      </div>

      {isChecked && hasAditionalInputs && (
        <div className='flex flex-col gap-y-2 items-end mt-3'>
          <div className='flex items-center'>
            <label htmlFor="" className='mr-3'>Número de pàgines: </label>
            <button className="flex items-center px-1 h-5 rounded-full border-2 border-gray-400" onClick={() => handleDecrement('pages')}>
              −
            </button>
            <input
              className='mx-1 w-14 text-center border-2 border-gray-400 rounded-md'
              onChange={handlePagesChange}
              type="number"
              value={pages}
            />
            <button className="flex items-center px-1 h-5 rounded-full border-2 border-gray-400" onClick={() => handleIncrement('pages')}>
              +
            </button>
          </div>
          <div className='flex items-center'>
            <label htmlFor="" className='mr-3'>Número de llenguatges: </label>
            <button className="flex items-center px-1 h-5 rounded-full border-2 border-gray-400" onClick={() => handleDecrement('languages')}>
              −
            </button>
            <input
              className='mx-1 w-14 text-center border-2 border-gray-400 rounded-md'
              onChange={handleLanguagesChange}
              type="number"
              value={languages}
            />
            <button className="flex items-center px-1 h-5 rounded-full border-2 border-gray-400" onClick={() => handleIncrement('languages')}>
              +
            </button>
          </div>
        </div>
      )}
    </div>
  );
}