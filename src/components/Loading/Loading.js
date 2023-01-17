import styles from './Loading.module.scss'

export default function Loading(){
  return(
    <div className={styles.loadingScreen}>
      <div className={styles.loadingScreenContent}>
        <div className={styles.loadingScreenContentBox}>
          <div className={styles.loadingScreenContentBoxLogo}></div>
          <div className={styles.loadingScreenContentBoxText}>RainAlert</div>
        </div>
        <i className="fa-solid fa-spinner fa-spin fa-2xl"></i>
      </div>
    </div>
  )
}