import img from '../assets/Logo.svg'
import './cardMini.css'
import { useNavigate } from 'react-router-dom'

function CardMini() {
    const navigate = useNavigate();

    const irDetallesProducto = () => {
        navigate('/detalles-producto')
    }
    
    return (
        <div className='card' onClick={irDetallesProducto}>
            <img src={img} alt="imagen producto" className='imgProducto'/>
            <h2 className="titulo">Producto</h2>
            <h3 className="descripBreve">Descripcion de producto</h3>
            <h3 className="precio">Precio: 00.000$</h3>
        </div>
    )
}

export default CardMini;