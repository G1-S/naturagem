import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import './App.css'
import ListaProdutos from './components/produtos/listaprodutos/ListaProdutos'
import FormProduto from './components/produtos/formprodutos/FormProdutos'
import DeletarProduto from './components/produtos/deletarprodutos/DeletarProduto'
import ListaCategorias from './components/categorias/listacategorias/ListaCategorias'
import FormCategoria from './components/categorias/formcategorias/FormCategoria'
import DeletarCategoria from './components/categorias/deletarcategoria/DeletarCategoria'




function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <main className='overflow-x-hidden overflow-y-hidden'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path='/produtos' element={<ListaProdutos/>}/>
              <Route path="/cadastrarprodutos" element={<FormProduto />} />
              <Route path="/editarprodutos/:id" element={<FormProduto />} />
              <Route path='/deletarprodutos/:id' element={<DeletarProduto/>}/>
              <Route path="/categorias" element={<ListaCategorias/>} />
              <Route path="/cadastrarcategoria" element={<FormCategoria />} />
              <Route path="/editarcategoria/:id" element={<FormCategoria />} />
              <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
            </Routes>
          </main>
        </BrowserRouter>
    </>
  )
}

export default App;