import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './SignIn'
import Signup from './Signup'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<SignIn/>}/>
        <Route index path='signup' element={<Signup/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
