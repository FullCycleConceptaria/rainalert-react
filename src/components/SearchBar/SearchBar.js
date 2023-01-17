import styles from './SearchBar.module.scss';
import Button from '../Button/Button';
import { useHandleClickInput } from '../../hooks/useHandleClickInput';

export default function SearchBar() {
  const [HandleClickInput, style] = useHandleClickInput();
  return (
    <div
      className={styles.searchBar}
    >
      <div
        className={styles.searchBarContainer}
        style={
          style === true
            ? { background: '#fff', borderRadius: '20px 20px 0 0' }
            : { background: 'rgba(255, 255, 255, 0.28)' }
        }
      >
        <input
          type='text'
          className={styles.searchBarContainerInput}
          placeholder='Rechercher'
          onClick={() => {
            HandleClickInput('open');
          }}
        />
        <i
          className='fa-solid fa-magnifying-glass fa-2x'
          style={style === true ? { color: '#262626' } : { color: '#fff' }}
        ></i>
      </div>
      <div
        className={styles.searchBarResults}
        style={
          style === true
            ? { opacity: '1', height: '550px' }
            : { opacity: '0', height: '0' }
        }
      >
        <div className={styles.searchBarResultsName}></div>
        <div className={styles.searchBarResultsButton}>
          <Button text='Annuler' color='#7696C7' onClick={HandleClickInput} />
          <Button text='Rechercher' color='#2F4C77' />
        </div>
      </div>
    </div>
  );
}
