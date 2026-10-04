import './navbar.css';
import Logo from '../assets/Logo.svg'
import User from '../assets/User.png'
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const authenticated = false;

    const irInicio = () => {
        navigate('/')
    }

    const btnCuentaHace = () => {
        if (authenticated) {
            navigate('/cuenta')
        } else {
            navigate('/login')
        }
    }
    
    const irAccesorios = () => {
        navigate('/Accesorios')
    }

    const irCategorias = () => {
        navigate('/Categorias')
    }

    return (
        <nav className='navbar'>
            <img src={Logo} alt="Logo" onClick={irInicio} className='logo'/>
            <div className="containerBtnMenu">
                <button className='btnMenu' onClick={irInicio}>Inicio</button>
                <button className='btnMenu' onClick={irAccesorios}>Accesorios</button>
                <button className='btnMenu' onClick={irCategorias}>Categorias</button>
            </div>
            <div className="containerBuscador">
                <input type="text" placeholder="Buscar" className='inputBusqueda'/>
                <button className='btnLupa'>🔍</button>
            </div>
            <div className="containerUsuario">
                <button className='btnMenu'>Mi carrito 🛒</button>
                <button className='btnUsuario' onClick={btnCuentaHace}><img src={User} alt="" className='imgUser'/></button>
            </div>
        </nav>
    )
}

export default Navbar;