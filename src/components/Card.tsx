import React, { useState } from 'react';
import { useProduct } from '../hooks/useProduct';

export default function Card({ title, description, price, hasAditionalInputs, isDiscounted }) {
  const { cart, setCart } = useProduct();
  const [isChecked, setIsChecked] = useState(false);
  const [pages, setPages] = useState(0);
  const [languages, setLanguages] = useState(0);
  const [modal, setModal] = useState({ isOpen: false, heading: '', content: '' });

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

  const handleOpenModal = (type) => {
    const heading = type === 'pages' ? 'Número de pàgines' : 'Número de llenguatges';
    const content = type === 'pages' ?
      <>
        <p>Afegeix les pàgines que tindrà el teu projecte.</p>
        <p>El cost de cada pàgina es de 30€.</p>
      </>
      :
      <>
        <p>Afegeix els llenguatges que tindrà el teu projecte.</p>
        <p>El cost de cada llenguatge es de 30€.</p>
      </>;

    setModal({ isOpen: true, heading, content });
  };

  const handleCloseModal = () => {
    setModal({ isOpen: false, heading: '', content: '' });
  };

  return (
    <div className={`shadow-lg rounded-2xl px-5 py-3 md:p-9 w-3/4 border-2 ${isChecked ? 'border-primary' : ''}`}>
      <div className='grid md:grid-cols-3 items-center'>
        <div className='flex text-center justify-center md:justify-start  items-center'>
          <div className=''>
            <h2 className='text-2xl font-semibold'>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className='min-h-[64px] flex flex-col justify-center items-center ease-in'>
          <p className='text-4xl font-bold'>{price}€</p>
          {isDiscounted && <p className='text-green-500 font-semibold'>Estalvia un 20%!</p>}
        </div>
        <div className='flex justify-center md:justify-end items-center'>
          <input
            className='mr-3 scale-150 accent-yellow-900'
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
            id={`afegir-${title}`}
            name='afegir'
          />
          <label htmlFor={`afegir-${title}`} className='text-xl'>Afegir</label>
        </div>
      </div>

      {isChecked && hasAditionalInputs && (
        <div className='flex flex-col gap-y-2 items-end mt-3'>
          <div className='flex items-center'>
            <span
              className='text-xs text-gray-400 font-black border border-gray-400 px-[6px] rounded-full mr-[6px] cursor-pointer'
              onClick={() => handleOpenModal('pages')}
            >
              i
            </span>
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
            <span
              className='text-xs text-gray-400 font-black border border-gray-400 px-[6px] rounded-full mr-[6px] cursor-pointer'
              onClick={() => handleOpenModal('languages')}
            >
              i
            </span>
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
      )}{modal.isOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-hidden'>
          <div className='bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-md mx-4 sm:mx-0'>
            <h2 className='text-xl font-bold mb-4 text-center'>{modal.heading}</h2>
            <div className='mb-4 text-center'>{modal.content}</div>
            <button
              onClick={handleCloseModal}
              className='mt-4 bg-primary text-white py-2 px-4 rounded hover:bg-red-600 block mx-auto'
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
