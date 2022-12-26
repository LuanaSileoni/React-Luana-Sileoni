import { useState } from 'react'
import {ItemListContainer} from './components/container/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  return (
    <>
    <NavBar />
     <ItemListContainer saludo={'Hable más fuerte tengo una toalla'}  /> 
    </>
  )
}

export default App