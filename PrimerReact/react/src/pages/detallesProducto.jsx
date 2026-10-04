import './detallesProducto.css'
import img from '../assets/Logo.svg'

function DetallesProducto() {
    return (
        <main className='containerDetallesProducto'>
            <div className='containerImgDetalles'>
                <img src={img} alt="Producto imagen" className='imgDetallesProducto'/>
                <div className='containerDetalles'>
                    <h2 className='nombreProducto'>Nombre Producto</h2>
                    <h3 className='precioProducto'>Precio: <strong>99.999$</strong></h3>
                    <p className='detallesProducto'>Detalles del producto seleccionado.</p>
                    <div className='containerBtnsCompras'>
                        <button className='btnsDeCompras'>Comprar</button>
                        <button className='btnsDeCompras'>Añadir al carrito</button>
                    </div>
                </div>
            </div>
            <div className='containerCaracteristicas'>
                <div className='containerDeCaracteristica'>
                    <h2 className='subTitulo'>Tipo:</h2>
                    <h3 className='text'>Tipo de bici o producto</h3>
                </div>
                <div className='containerDeCaracteristica'>
                    <h2 className='subTitulo'>Especificaciones:</h2>
                    <h3 className='text'>Especificaciones de producto</h3>
                </div>
            </div>

        </main>
    )
}

export default DetallesProducto;