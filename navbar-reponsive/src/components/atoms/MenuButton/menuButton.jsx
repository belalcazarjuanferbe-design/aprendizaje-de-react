import styles from './menuButton.module.css'

function menuButton({onClick, isOpen = false}) {
    return (
        <button
        type="button"
        className={styles.button}
        onClick={onClick}
        aria-label={isOpen ? 'Cerrar menu' : 'Abrir menu'}
        aria-expanded={isOpen}
        >
            <span>&#9776;</span>
        </button>
    )
}

export default menuButton;