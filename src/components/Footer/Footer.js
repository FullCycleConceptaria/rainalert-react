import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Footer() {
  const [side, setSide] = useState('right');
  return (
    <div className={styles.footer}>
      <div className={styles.footerButton}>
        <Link
          to='/pages/map'
          className={styles.footerButtonSide}
          style={side === 'right' ? { opacity: '.7' } : { opacity: '1' }}
          onClick={() => setSide('left')}
        >
          <i className='fa-solid fa-location-dot fa-2xl'></i>
          <p className={styles.footerButtonSideText}>Carte</p>
        </Link>
        <Link
          to='/'
          className={styles.footerButtonSide}
          style={side === 'left' ? { opacity: '.7' } : { opacity: '1' }}
          onClick={() => setSide('right')}
        >
          <i className='fa-solid fa-cloud fa-2xl'></i>
          <p className={styles.footerButtonSideText}>Prévision</p>
        </Link>
      </div>
      <div
        className={styles.footerSlider}
        style={side === 'left' ? { left: '70px' } : { left: '294px' }}
      ></div>
    </div>
  );
}
