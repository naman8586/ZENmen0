import React from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}>

        </Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  )
}

export default App
