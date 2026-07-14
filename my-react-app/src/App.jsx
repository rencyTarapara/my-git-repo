import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Footer from './Footer'
import Navbar from './pages/Navbar'

const App = () => {
  return (
    <BrowerRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowerRouter>

  )
}

export default App