import styles from './SearchBar.module.scss';

export default function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBarContainer}>
        <input
          type='text'
          className={styles.searchBarContainerInput}
          placeholder='Rechercher'
        />
        <i className='fa-solid fa-magnifying-glass fa-2x'></i>
      </div>
      <div className={styles.searchBarResults}>
        <div className={styles.searchBarResultsName}></div>
        <div className={styles.searchBarResultsButton}></div>
      </div>
    </div>
  );
}
