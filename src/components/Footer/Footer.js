import styles from './Footer.module.scss';

export default function Footer({side = 'right'}) {
  return (
    <div className={styles.footer}>
      <div className={styles.footerButton}>
        <div className={styles.footerButtonLeft}>
          <i className='fa-solid fa-location-dot fa-2xl'></i>
          <p className={styles.footerButtonLeftText}>Carte</p>
        </div>
        <div className={styles.footerButtonRight}>
          <i className='fa-solid fa-cloud fa-2xl'></i>
          <p className={styles.footerButtonRightText}>Prévision</p>
        </div>
      </div>
      <div className={styles.footerSlider} style={side === 'left' ? { left: '65px' } : {right:'65px'}}></div>
    </div>
  );
}
