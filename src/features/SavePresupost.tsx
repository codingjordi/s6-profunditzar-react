import React, { useState } from 'react';
import { useProduct } from '../hooks/useProduct';

export default function PressupostButton() {
  const { cart, setCart, setPressupostos, totalPrice } = useProduct();

  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phoneNumber: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phoneNumber: ''
  });

  const cartProducts = {
    products: cart.map(product => ({ ...product })) 
  };

  const validateName = (name: string) => /^[A-Za-zÀ-ÖØ-öø-ÿ'’\- ]{2,}$/.test(name);
  const validateEmail = (email: string) => /^[\w-.]+@([\w-]+\.)+[a-zA-Z]{2,}$/.test(email);  // Ajuste en la validación
  const validatePhoneNumber = (phoneNumber: string) => /^\+?(\d{9})$/.test(phoneNumber);  // Ajuste en la validación

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setUserDetails({
      ...userDetails,
      name
    });
    setErrors({
      ...errors,
      name: validateName(name) ? '' : 'Debe tener al menos 2 letras'
    });
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phoneNumber = e.target.value;
    setUserDetails({ ...userDetails, phoneNumber });
    setErrors({
      ...errors,
      phoneNumber: validatePhoneNumber(phoneNumber) ? '' : 'Formato de teléfono no válido'
    });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setUserDetails({ ...userDetails, email });
    setErrors({
      ...errors,
      email: validateEmail(email) ? '' : 'El correo electrónico no es válido'
    });
  };

  const savePressupost = () => {
    const nameValid = validateName(userDetails.name);
    const emailValid = validateEmail(userDetails.email);
    const phoneValid = validatePhoneNumber(userDetails.phoneNumber);

    setErrors({
      name: nameValid ? '' : 'Debe tener al menos 2 letras',
      email: emailValid ? '' : 'El correo electrónico no es válido',
      phoneNumber: phoneValid ? '' : 'Formato de teléfono no válido'
    });

    if (!nameValid || !emailValid || !phoneValid || cart.length === 0) {
      return; // No se guarda el presupuesto si hay errores
    }

    const newPressupost = {
      name: userDetails.name,
      email: userDetails.email,
      phoneNumber: userDetails.phoneNumber,
      products: cartProducts.products,
      cartPrice: totalPrice,
      date: Date.now()
    };
    console.log('nuevo presupuesto: ', newPressupost);



    setPressupostos(prev => [...prev, newPressupost]);
    setCart([]);
    setUserDetails({ name: '', email: '', phoneNumber: '' });
  };

  return (
    <div className='text-center md:text-left shadow-2xl rounded my-3 p-9 lg:min-h-44 lg:max-h-44 w-3/4'>
      <h2>Demanar pressupost</h2>
      <div className='w-full lg:flex lg:justify-between gap-1  mt-3'>

        <div className=''>
          <input
            className=' w-full rounded-md border border-gray-400 py-2 px-2 mb-[6px] placeholder:text-lg'
            value={userDetails.name}
            onChange={handleNameChange}
            type='text'
            placeholder='Nom'
          />
          <p className="text-red-500 text-xs h-6">{errors.name}</p>
        </div>

        <div className=''>
          <input
            className=' w-full rounded-md border border-gray-400 py-2 px-2 mb-[6px]  placeholder:text-lg'
            value={userDetails.phoneNumber}
            onChange={handlePhoneNumberChange}
            type='text'
            placeholder='Telèfon'
          />
          <p className="text-red-500 text-xs h-6" >{errors.phoneNumber}</p>
        </div>

        <div className=''>
          <input
            className=' w-full rounded-md border border-gray-400 py-2 px-2 mb-[6px] placeholder:text-lg'
            value={userDetails.email}
            onChange={handleEmailChange}
            type='text'
            placeholder='Email'
          />
          <p className="text-red-500 text-xs h-6">{errors.email}</p>
        </div>

        <div className='md:text-center lg:text-left'>
          <button
            className='h-12 lg:h-11 leading-[18px] bg-primary font-semibold text-white rounded-xl px-3 hover:opacity-90'
            onClick={savePressupost}
          >
            Sol·licitar pressupost
          </button>
        </div>
      </div>
    </div>
  );
}
