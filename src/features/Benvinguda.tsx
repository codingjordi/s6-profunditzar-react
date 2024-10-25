import React from "react";
import { NavLink } from "react-router-dom";

export default function Benvinguda() {
  return (
    <div className="max-w-screen-xl mx-auto p-6">
      
      <header className="text-center my-10">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Benvingut a Frontender.itacademy
        </h1>
        <p className="text-lg text-gray-700">
          La solució completa per crear, optimitzar i fer créixer la teva presència en línia.
        </p>
      </header>

      <section className="my-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Els nostres serveis</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="shadow-lg rounded-lg p-6 border border-gray-200 bg-white">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Creació de Pàgines Web</h3>
            <p className="text-gray-700">
              Dissenyem llocs web personalitzats i funcionals que reflecteixen la teva marca i destaquen enfront de la competència.
            </p>
          </div>

          <div className="shadow-lg rounded-lg p-6 border border-gray-200 bg-white">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Optimització SEO</h3>
            <p className="text-gray-700">
              Implementem estratègies SEO efectives per millorar la teva visibilitat als motors de cerca i atraure més trànsit.
            </p>
          </div>

          <div className="shadow-lg rounded-lg p-6 border border-gray-200 bg-white">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Publicitat en Línia</h3>
            <p className="text-gray-700">
              Gestionem campanyes d'anuncis a Google i xarxes socials per maximitzar el teu abast i atraure clients potencials.
            </p>
          </div>
          
        </div>
      </section>

      <section className="my-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Calculadora de Pressupostos</h2>
        <p className="text-gray-700 mb-4">
          La nostra calculadora de pressupostos et permet estimar el cost dels nostres serveis en temps real.
        </p>
        <p className="text-gray-700 mb-8">
          Personalitza el teu projecte seleccionant el nombre de pàgines web, idiomes i altres elements, i obtén un pressupost detallat.
        </p>
        <NavLink to='/calculadora'>
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-200">
            Explora la Calculadora
          </button>
        </NavLink>
      </section>
    </div>
  );
}
