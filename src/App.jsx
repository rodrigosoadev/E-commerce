import './App.css'

import Home from './component/Home'
import Navbar from './component/Navbar'
import Products from './component/Products'
import Product from './component/Product'
import Cart from './component/Cart'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>

          <Route exact path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<Product />} />
          <Route path='/cart' element={<Cart />} />

        </Routes>

      </Router>
    </div>
  )
}



export default App
