import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./pages/Home"
import Login from "./pages/Login"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from "./pages/Register"
import Protected from './components/Protected'

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path = "/login" element={<Login/>}/>
      <Route path = "/register" element={<Register/>}/>
      <Route
          path="/"
          element={
            <Protected>
              <Home />
            </Protected>
          }
        />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
