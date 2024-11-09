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
    <div className='shadow-2xl rounded my-3 p-9 h-40 w-3/4'>
      <h2>Demanar pressupost</h2>
      <div className='flex gap-1 justify-between mt-3'>

        <div>
          <input
            className='rounded-md border border-gray-400 py-2 px-2 mb-[6px] h-10 w-56 placeholder:text-lg'
            value={userDetails.name}
            onChange={handleNameChange}
            type='text'
            placeholder='Nom'
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
        </div>

        <div>
          <input
            className='rounded-md border border-gray-400 py-2 px-2 mb-[6px] h-10 w-56 placeholder:text-lg'
            value={userDetails.phoneNumber}
            onChange={handlePhoneNumberChange}
            type='text'
            placeholder='Telèfon'
          />
          {errors.phoneNumber && <p className="text-red-500 text-xs">{errors.phoneNumber}</p>}
        </div>

        <div>
          <input
            className='rounded-md border border-gray-400 py-2 px-2 mb-[6px] h-10 w-56 placeholder:text-lg'
            value={userDetails.email}
            onChange={handleEmailChange}
            type='text'
            placeholder='Email'
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
        </div>

        <button
          className='h-10 bg-primary font-bold text-white rounded-xl px-4 hover:opacity-90'
          onClick={savePressupost}
        >
          Sol·licitar pressupost
        </button>
      </div>
    </div>
  );
}
