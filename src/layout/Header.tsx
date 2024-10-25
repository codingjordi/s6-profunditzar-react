
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <header className='flex items-center justify-between h-16 max-w-screen-xl mx-auto'>
        <p className="text-3xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Frontender.itacademy
        </p>
        <nav>
          <ul className='flex gap-5'>
            <li><NavLink to='/benvinguda'>Benvinguda</NavLink></li>
            <li><NavLink to='/calculadora'>Calculadora pressupostos</NavLink></li>
          </ul>
        </nav>
      </header>

    </>
  );
}
