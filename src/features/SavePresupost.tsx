import React, { useState } from 'react'
import { useProduct } from '../hooks/useProduct'

export default function PressupostButton() {

  const { cart, setCart, pressupostos, setPressupostos } = useProduct()

  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phoneNumber: ''
  });

  const cartProducts = cart.reduce((acc, product) => {
    acc.products += product.title + ','
    acc.cartPrice += product.totalPrice
    return acc
  }, { products: '', cartPrice: 0 }
  );

  // handlers quan cambia el valor dels inputs onChange.

  const handleNameChange = (e) => {
    setUserDetails({
      ...userDetails,
      name: e.target.value   
    })
  }
  
  const handlePhoneNumberChange = (e) => {
    setUserDetails({
      ...userDetails,
      phoneNumber: e.target.value   
    })
  }

  const handleEmailChange = (e) => {
    setUserDetails({
      ...userDetails,
      email: e.target.value   
    })
  }


  // Fem setPressupostos amb el newObj, despres fem setCart([]) per netejar el cart pel següent)

  const savePressupost = () => {
    // Validaciones
    const isNameValid = /^[a-zA-Z\s]{2,}$/.test(userDetails.name); // Solo letras y mínimo 2 caracteres
    const isPhoneNumberValid = /^\d{6,}$/.test(userDetails.phoneNumber); // Solo números, mínimo 6 dígitos
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userDetails.email); // Formato de email
  
    if (!isNameValid) {
      alert("El nombre debe tener al menos 2 caracteres y no contener números.");
      return;
    }
    if (!isPhoneNumberValid) {
      alert("El teléfono debe tener al menos 6 números.");
      return;
    }
    if (!isEmailValid) {
      alert("Por favor, introduce un email válido.");
      return;
    }
  
    const newObj = {
      name: userDetails.name,
      email: userDetails.email,
      phoneNumber: userDetails.phoneNumber,
      products: cartProducts.products,
      totalPrice: cartProducts.cartPrice
    };
  
    setPressupostos([
      ...pressupostos,
      newObj
    ]);
  
    setCart([]);

    setUserDetails({
      name: '',
      email: '',
      phoneNumber: ''
    })
    console.log(pressupostos);
  };
  

  return (
    <div className='shadow-2xl rounded my-3 p-9 w-3/4'>
      <h2>Demanar pressupost</h2>
      <div className='flex gap-1 justify-between mt-3'>
        <input className='rounded-md border border-gray-400 py-2 px-2 h-10 w-56 placeholder:text-lg' value={userDetails.name} onChange={handleNameChange} type="text" placeholder='Nom' />
        <input className='rounded-md border border-gray-400 py-2 px-2 h-10 w-56 placeholder:text-lg' value={userDetails.phoneNumber} onChange={handlePhoneNumberChange} type="text" placeholder='Telèfon' />
        <input className='rounded-md border border-gray-400 py-2 px-2 h-10 w-56 placeholder:text-lg' value={userDetails.email} onChange={handleEmailChange} type="text" placeholder='Email' />
        <button className='bg-primary font-bold text-white rounded-xl px-4 hover:opacity-90' onClick={savePressupost}>Sol·licitar pressupost</button>
      </div>
    </div>
  )
}