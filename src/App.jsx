import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Nav from './components/Nav'
import Pagina from './components/Pagina'


function App() {
  return (
    <>

    <Nav />
    <Login />
    <Pagina></Pagina>
    
    </>
  )
}

export default App
