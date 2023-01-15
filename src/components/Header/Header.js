import styles from './Header.module.scss'

export default function Header(){
    return(
        <div className={styles.header}>
            <div className={styles.logoheader}></div>
            <div className={styles.txtheader}>RainAlert</div>
        </div>
    )
}