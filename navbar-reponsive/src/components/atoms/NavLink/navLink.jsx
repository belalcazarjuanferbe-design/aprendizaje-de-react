import styles from './navLink.module.css'

function navLink({href = '#', label, active = false, onClick}) {
    return (
        <a href={href}
        className={`${styles.link} ${active ? styles.active : ''}`}
        onClick={onClick}
        >
            {label}
        </a>
    )
}

export default navLink