import './accesorios.css'
import CardMini from '../components/cardMini'


function Accesorios() {
    return (
        <main>
            <div className='containerRecomendaciones'>
                <h2 className='subTitulo'>Accesorios</h2>
                <div className='containerCards'>
                    <CardMini />
                    <CardMini />
                    <CardMini />
                    <CardMini />
                    <CardMini />
                </div>
            </div>
        </main>
    )
}

export default Accesorios;