import styles from './Button.module.scss'

export default function Button({color, text, onClick}) {
  return (
    <div className={styles.button} style={{background: color}} onClick={onClick}>
      <p>{text}</p>
    </div>
  );
}