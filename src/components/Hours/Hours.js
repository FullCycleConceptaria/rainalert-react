import styles from './Hours.module.scss';
import { useHandleClickHours } from '../../hooks/useHandleClickHours';

export default function Hours() {
  const [HandleClickHours, buttonStyled] = useHandleClickHours();
  return (
    <div className={styles.hours}>
      <div
        className={styles.hoursButton}
        id={1}
        onClick={HandleClickHours}
        style={
          buttonStyled === '1'
            ? {
                background: '#fff',
                color: '#2F4C77',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                cursor: 'context-menu',
              }
            : { background: 'none', color: '#fff' }
        }
      >
        12:00
      </div>
      <div
        className={styles.hoursButton}
        id={2}
        onClick={HandleClickHours}
        style={
          buttonStyled === '2'
            ? {
                background: '#fff',
                color: '#2F4C77',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                cursor: 'context-menu',
              }
            : { background: 'none', color: '#fff' }
        }
      >
        13:00
      </div>
      <div
        className={styles.hoursButton}
        id={3}
        onClick={HandleClickHours}
        style={
          buttonStyled === '3'
            ? {
                background: '#fff',
                color: '#2F4C77',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                cursor: 'context-menu',
              }
            : { background: 'none', color: '#fff' }
        }
      >
        14:00
      </div>
      <div
        className={styles.hoursButton}
        id={4}
        onClick={HandleClickHours}
        style={
          buttonStyled === '4'
            ? {
                background: '#fff',
                color: '#2F4C77',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                cursor: 'context-menu',
              }
            : { background: 'none', color: '#fff' }
        }
      >
        15:00
      </div>
      <div
        className={styles.hoursButton}
        id={5}
        onClick={HandleClickHours}
        style={
          buttonStyled === '5'
            ? {
                background: '#fff',
                color: '#2F4C77',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                cursor: 'context-menu',
              }
            : { background: 'none', color: '#fff' }
        }
      >
        16:00
      </div>
    </div>
  );
}
