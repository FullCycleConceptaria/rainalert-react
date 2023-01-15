import styles from './Weather.module.scss';

export default function Weather() {
  return (
    <div className={styles.weather}>
      <div className={styles.weatherBox}>
        <div className={styles.weatherBoxLogo}>
          <i class='fa-solid fa-cloud fa-4x'></i>
        </div>
        <div className={styles.weatherBoxTemperature}>15°C</div>
      </div>
      <div className={styles.weatherMillimeters}>
        <div className={styles.weatherMillimetersTxt}>
          La pluie se termine dans 1h45
        </div>
      </div>
    </div>
  );
}
