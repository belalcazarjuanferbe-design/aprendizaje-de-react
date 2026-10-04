import NavBar from './components/organisms/NavBar/NavBar'
import styles from './App.module.css'

const NAV_ITEMS = [
  {href: '#inicio', label: 'Inicio'},
  {href: '#nosotros', label: 'Nosotros'},
  {href: '#servicios', label: 'Servicios'},
  {href: '#contacto', label: 'Contacto'},
]

function app() {
  return (
    <>
      <NavBar logoText="Aplicacion" items={NAV_ITEMS} />

      <main className={styles.content}>
        <h1>NavBar responsive</h1>
        <p>
          Cambia el tamaño de la ventana para observar como se adapta el menu hamburguesa. <span>&#9776;</span>
        </p>

      </main>
    </>
  )
}

export default app