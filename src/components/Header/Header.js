import styles from './Header.module.scss'

export default function Header(){
    return(
        <div className={styles.header}>
            <div className={styles.headerLogo}></div>
            <div className={styles.headerText}>RainAlert</div>
        </div>
    )
}