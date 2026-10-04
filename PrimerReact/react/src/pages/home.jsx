import './home.css'
import CardMini from '../components/cardMini'
import FondoImg1 from '../assets/FondoDesierto.png'
import FondoImg2 from '../assets/FondoRuta.jpg'
import FondoImg3 from '../assets/BMXFondo.jpg'
import { useEffect, useState } from 'react'


function Home() {
    const Fondos = [FondoImg1, FondoImg2, FondoImg3]

    const [numero, setNumero] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setNumero((prevNumero) => {
                if (prevNumero >= Fondos.length - 1) {
                    return 0;
                } else {
                    return prevNumero + 1;
                }
            });
        }, 4000)

        return () => clearInterval(interval);
    }, [Fondos.length])

    return (
        <main className="main">
            <img src={Fondos[numero]} alt="Fondo" className='imgFondo'/>
            <h1>BikeStore</h1>
            <div className='containerCardMini'>
                <CardMini />
                <CardMini />
                <CardMini />
                <CardMini />
                <CardMini />
                <CardMini />
                <CardMini />
                <CardMini />
            </div>
        </main>
    )
}

export default Home;