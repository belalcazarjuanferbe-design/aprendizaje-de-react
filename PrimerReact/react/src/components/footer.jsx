import './footer.css';
import Logo from '../assets/Logo.svg'

function Footer() {
    return (
        <footer className='footer'>
            <img src={Logo} alt="Logo" className='logoFooter'/>
            <div className='seccionesFooter'>
                <h2 className='textPrincipalFooter'>Correos:</h2>
                <h3 className='textSecundarioFooter'>bikestore@gmail.com</h3>
                <h3 className='textSecundarioFooter'>soportbikestore@gmail.com</h3>
            </div>
            <div className='seccionesFooter'>
                <h2 className='textPrincipalFooter'>telefonos:</h2>
                <h3 className='textSecundarioFooter'>+57 321 2147325</h3>
                <h3 className='textSecundarioFooter'>+57 321 2187221</h3>
            </div>
        </footer>
    )
}

export default Footer;