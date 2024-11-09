import { ProductProvider } from "./context/ProductContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Benvinguda from "./Benvinguda";
import Calculadora from "./features/Calculadora";
import 'flowbite/dist/flowbite.css';
import 'flowbite/dist/flowbite.js';



export default function App() {

  return (
    <ProductProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Benvinguda />} />
          <Route path="benvinguda" element={<Benvinguda />} />
          <Route path="calculadora" element={<Calculadora />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ProductProvider>
  );
}