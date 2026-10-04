import './registrarse.css'

function Registrarse() {
    return(
        <div className='containerRegistrarse'>
            <div className='containerForm'>
                <h2 className='subTitulo'>Registrarse</h2>
                <form className='formulario'>
                    <h3 className='descripInput'>Nombre:</h3>
                    <input type="text" className='inputForm'/>
                    <h3 className='descripInput'>Correo:</h3>
                    <input type="Email" className='inputForm'/>
                    <h3 className='descripInput'>Contraseña:</h3>
                    <input type="Password" className='inputForm'/>
                    <h3 className='descripInput'>Confirmar Contraseña:</h3>
                    <input type="Password" className='inputForm'/>
                    <h3 className='descripInput'>Ciudad:</h3>
                    <input type="text" className='inputForm'/>
                    <h3 className='descripInput'>Dirección:</h3>
                    <input type="text" className='inputForm'/>
                    <button className='btnRegistrarse'>Registrarse</button>
                </form>
                <p>¿Ya estas registrado? <a href="/login">Iniciar sesión</a></p>
            </div>
        </div>
    )
}

export default Registrarse;