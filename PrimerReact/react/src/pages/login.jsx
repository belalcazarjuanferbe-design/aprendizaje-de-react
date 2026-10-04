import './login.css';

function Login() {
    return(
        <div className='container'>
            <div className='containerForm'>
                <h2 className='subTitulo'>Inicio de sesión</h2>
                <form className='formulario'>
                    <h3 className='descripInput'>Correo:</h3>
                    <input type="Email" placeholder='Correo' className='inputForm'/>
                    <h3 className='descripInput'>Contraseña:</h3>
                    <input type="password" placeholder='Contraseña' className='inputForm'/>
                    <p className='textVerContraseña'>Mostrar Contraseña</p>
                    <button type='submit' className='iniciarSesion'>Iniciar Sesión</button>
                </form>
                <p className='textRegistro'>¿No estas registrado? <a href="/registrarse">Registrarse</a></p>
                <p className='textRegistro'>¿Haz olvidado la contraseña? <a href="/recuperacion">Recuperar</a></p>
            </div>
        </div>
    )
}

export default Login;