import styles from './Maps.module.scss';
import { useDate } from '../../hooks/useDate';

export default function Maps() {
  const hour = useDate();
  return (
    <div className={styles.maps}>
      <iframe title='iframe' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1672521.215237847!2d1.65653915762622!3d46.49012643934689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54a02933785731%3A0x6bfd3f96c747d9f7!2sFrance!5e0!3m2!1sfr!2sbe!4v1669900972368!5m2!1sfr!2sbe'></iframe>
      <div className={styles.mapsHour}>{hour}</div>
    </div>
  );
}
