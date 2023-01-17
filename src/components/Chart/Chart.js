import styles from './Chart.module.scss';
import useChart from '../../hooks/useChart';
import { useEffect } from 'react';

export default function Chart() {
  const [arrayHourlyBuild, arrayHourly] = useChart();
  useEffect(() => {
    arrayHourlyBuild(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  });
  return (
    <div className={styles.chart}>
      <div className={styles.chartHeader}>
        <p className={styles.chartHeaderText}>Précipitations</p>
        <div className={styles.chartHeaderRainChance}>
          <p className={styles.chartHeaderRainChanceText}>Chance de pluie</p>
          <div className={styles.chartHeaderRainChancePercentage}>25%</div>
        </div>
      </div>
      <div className={styles.chartMain}>
        <div className={styles.chartMainContainer}>
          <div className={styles.chartMainContainerRain}>
            <div className={styles.chartMainContainerRainImg1} />
            <p>Fortes</p>
          </div>
          <div className={styles.chartMainContainerRain}>
            <div className={styles.chartMainContainerRainImg2} />
            <p>Moyennes</p>
          </div>
          <div className={styles.chartMainContainerRain}>
            <div className={styles.chartMainContainerRainImg3} />
            <p>Faibles</p>
          </div>
        </div>
        <div className={styles.chartMainChart}>
          <canvas id='chart'></canvas>
        </div>
      </div>
    </div>
  );
}
