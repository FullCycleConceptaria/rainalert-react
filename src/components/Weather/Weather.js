import styles from './Weather.module.scss';

export default function Weather() {
  return (
    <div className={styles.weather}>
      <div className={styles.weatherBox}>
        <div className={styles.weatherBoxLogo}>
          <i className='fa-solid fa-cloud fa-4x'></i>
        </div>
        <div className={styles.weatherBoxTemperature}>0°C</div>
      </div>
      <div className={styles.weatherMillimeters}>
        <div className={styles.weatherMillimetersText}>
          0mm de pluie a 00:00
        </div>
      </div>
    </div>
  );
}
