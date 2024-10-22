import CardList from "./CardList"
import TotalPrice from "./TotalPrice"
import TotalProvider from "./context/TotalContext"
import { serveis } from './lib/Serveis'



export default function App() {

  return (
    <TotalProvider>
        <header >
          <div className='flex items-center h-20 text-3xl max-w-screen-xl mx-auto'>
            <p className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Frontender.itacademy</p>
          </div>
          <div className='flex justify-center items-center h-56 bg-center hero-img'>
            <p className='text-5xl text-gray-50 backdrop-blur-[2px] p-5'>Aconsegueix la millor qualitat</p>
          </div>
        </header>
        <div className="max-w-screen-xl mx-auto">
          <div className='grid place-items-center my-9 gap-10'>
            <CardList array={serveis}></CardList>
          </div>
          <TotalPrice></TotalPrice>
        </div>
    </TotalProvider>
  )
}


