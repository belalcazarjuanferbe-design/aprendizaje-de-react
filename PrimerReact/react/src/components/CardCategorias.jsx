import './CardCategorias.css'
import img from '../assets/Logo.svg'

function CardCategoria() {
    return (
        <div className="cardCategoria">
            <img src={img} alt="Categoria imagen" className='imgCategoria'/>
            <h2 className='subTitulo'>Titulo Categoria</h2>
        </div>
    )
}

export default CardCategoria;