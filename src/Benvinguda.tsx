import React from "react";
import { NavLink } from "react-router-dom";

export default function Benvinguda() {
  return (
    <div className="max-w-screen-xl mx-auto ">

      <header className="text-center my-10">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Benvingut a Frontender.itacademy
        </h1>
        <p className="text-lg text-gray-700">
          La solució completa per crear, optimitzar i fer créixer la teva presència en línia.
        </p>
      </header>

      <section className="mt-0 mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Els nostres serveis</h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="text-center shadow-lg rounded-2xl p-10 border border-gray-200 bg-white">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Creació de Pàgines Web</h3>
            <p className="text-gray-700">
              Dissenyem llocs web personalitzats i funcionals que reflecteixen la teva marca i destaquen enfront de la competència.
            </p>
          </div>

          <div className="text-center shadow-lg rounded-2xl p-10 border border-gray-200 bg-white">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Optimització SEO</h3>
            <p className="text-gray-700">
              Implementem estratègies SEO efectives per millorar la teva visibilitat als motors de cerca i atraure més trànsit.
            </p>
          </div>

          <div className="text-center shadow-lg rounded-2xl p-10 border border-gray-200 bg-white">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Publicitat en Línia</h3>
            <p className="text-gray-700">
              Gestionem campanyes d'anuncis a Google i xarxes socials per maximitzar el teu abast i atraure clients potencials.
            </p>
          </div>

        </div>
      </section>

      <section className="my-16 p-8 text-center w-3/4 mx-auto rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600">
        <h2 className="text-3xl font-semibold text-zinc-100 mb-6">Calculadora de Pressupostos</h2>
        <p className="text-zinc-200 mb-4">
          La nostra calculadora de pressupostos et permet estimar el cost dels nostres serveis en temps real.
        </p>
        <p className="text-zinc-200 mb-8">
          Personalitza el teu projecte seleccionant el nombre de pàgines web, idiomes i altres elements, i obtén un pressupost detallat.
        </p>
        <NavLink to='/calculadora'>
          <a href="#_" className="relative inline-flex items-center justify-center p-4 px-10 py-3 font-medium text-white rounded-lg shadow-2xl overflow-hidden group bg-gradient-to-r from-teal-400 to-blue-500">
            <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-orange-500 rounded-full blur-md ease"></span>
            <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
              <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-pink-400 rounded-full blur-md"></span>
              <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-yellow-500 rounded-full blur-md"></span>
            </span>
            <span className="absolute left-[-2rem] text-xl opacity-0 transition duration-300 group-hover:left-1 group-hover:opacity-100">🚀</span>
            <span className="relative text-white">Explora la calculadora</span>
            <span className="absolute right-[-2rem] text-xl opacity-0 transition duration-300 group-hover:right-1 group-hover:opacity-100">🚀</span>
          </a>
        </NavLink>


      </section>
    </div>
  );
}
