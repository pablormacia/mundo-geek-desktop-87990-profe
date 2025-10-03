import './App.css'
import NavBar from './components/navbar/NavBar'
import CategoryListContainer from './components/category-list-container/CategoryListContainer';
import ProductsListContainer from './components/products-list-container/ProductsListContainer';
import Home from './components/home/Home';
import Card from './components/card/Card'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  /* let counter = 0 */
  console.log("Componente App montado")
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/categorias" element={<CategoryListContainer />} />
        <Route path="/productos/:id" element={<ProductsListContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
