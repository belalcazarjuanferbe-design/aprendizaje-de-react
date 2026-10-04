import './App.css'
import Login from './pages/login'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages/home'
import Registrarse from './pages/registrarse'
import Accesorios from './pages/accesorios'
import Categorias from './pages/categorias'
import DetallesProducto from './pages/detallesProducto'
import Footer from './components/footer'

function App() {
    return (
        <>
        <Navbar />
        <Routes>
            <Route path='/Login' element={<Login />} />
            <Route path='/' element={<Home />} />
            <Route path='/Registrarse' element={<Registrarse />} />
            <Route path='/Accesorios' element={<Accesorios />} />
            <Route path='/Categorias' element={<Categorias />} />
            <Route path='/Detalles-Producto' element={<DetallesProducto />} />
        </Routes>
        <Footer />
        </>
    )
}

export default App;