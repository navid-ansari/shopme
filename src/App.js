import React from 'react'
import './App.css'

// router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// components
import Header from './components/Header'

// pages
import ProductList from './pages/Product-List'
import ProductDetail from './pages/Product-Detail'
import FavoritesList from './pages/Favorites-List'
import CartList from './pages/Cart-List'
import NotFound from './components/NotFound'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />}></Route>
          <Route path="/product/:productId" element={<ProductDetail />}></Route>
          <Route path="/favorite" element={<FavoritesList />}></Route>
          <Route path="/cart" element={<CartList />}></Route>
          <Route path="*" element={<NotFound />}>
            404 Not Found
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
