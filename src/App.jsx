import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import Products from './components/Products'
import Cart from './components/Cart'
import NotFound from './components/NotFound' 


const App = () =>(
    <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
)

export default App
