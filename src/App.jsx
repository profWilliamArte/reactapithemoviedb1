import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import Tendencias from './pages/Tendencias'
import Categorias from './pages/Categorias'
import Detalle from './pages/Detalle'
import Peliculas from './pages/Peliculas'
const App = () => {
  return (



   <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/inicio" element={<Inicio/>} />
          <Route path="/tendencias/:id" element={<Tendencias/>} />
          <Route path="/categorias/:id/:tipo" element={<Categorias/>} />
          <Route path="/detalle/:tipo/:id" element={<Detalle/>} />
          <Route path="/peliculas/:id" element={<Peliculas/>} />

          <Route path="*" element={<Inicio/>} />
        </Routes>
      <Footer/>
   </BrowserRouter>
  )
}

export default App