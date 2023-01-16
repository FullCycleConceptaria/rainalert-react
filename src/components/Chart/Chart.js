import styles from './Chart.module.scss'
import useChart from '../../hooks/useChart'

export default function Chart(){
  const [arrayHourlyBuild, arrayHourly] = useChart();
  console.log(arrayHourlyBuild);
  return(
    <div className={styles.chart}>
      <div className={styles.chartStats}>
          <canvas id="chart"></canvas>
      </div>
    </div>
  )
}