import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import './App.css'
import ListaProdutos from './components/produtos/listaprodutos/ListaProdutos'
import FormProduto from './components/produtos/formprodutos/FormProdutos'
import DeletarProduto from './components/produtos/deletartema/DeletarProduto'


function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path='/produtos' element={<ListaProdutos/>}/>
              <Route path="/cadastrarproduto" element={<FormProduto />} />
              <Route path="/editarproduto/:id" element={<FormProduto />} />
              <Route path='/deletarproduto/:id' element={<DeletarProduto/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App