import styles from './Names.module.scss';

export default function Names({ filter }) {
  return (
    <div key={crypto.randomUUID()}>
      <div className={styles.text}>{filter}</div>
      <div className={styles.line}></div>
    </div>
  );
}
