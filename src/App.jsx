import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import Products from './components/Products'
import Cart from './components/Cart'
import NotFound from './components/NotFound' 
import ProtectedRoute from './components/ProtectedRoute'


const App = () =>(
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/" element={<ProtectedRoute element={<Home />} />} />
      <Route path="/products" element={<ProtectedRoute element={<Products />} />} />
      <Route path="/cart" element={<ProtectedRoute element={<Cart />} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
)

export default App
