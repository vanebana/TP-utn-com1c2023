import { useState } from 'react'
import './global.scss'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart'
import HomePage from './pages/Homepage'
import Contact from './pages/Contacto'
import Detail from './pages/Detail'
import NotFound from './pages/NotFound'


function App() {

  return (
    <>
      <Header />
      <main>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/detail/:id' element={<Detail/>}/> 
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
     
      </main>

    </>
  )
}

export default App
