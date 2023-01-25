import styles from './SearchBar.module.scss';
import Button from '../Button/Button';
import { useHandleClickInput } from '../../hooks/useHandleClickInput';
import { useState } from 'react';

export default function SearchBar({ nameList }) {
  const [HandleClickInput, style] = useHandleClickInput();

  const [filter, setFilter] = useState('');
  const [filteredNames, setFilteredNames] = useState([]);

  function filterArray(e) {
    setFilter(e.target.value);
  }
  return (
    <div className={styles.searchBar}>
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
          value={filter}
          onClick={() => {
            HandleClickInput('open');
          }}
          onInput={(e) => filterArray(e)}
        />
        <i
          className='fa-solid fa-magnifying-glass fa-2x'
          style={style === true ? { color: '#262626' } : { color: '#fff' }}
          onClick={() => {
            if (filter !== '') {
              setFilteredNames(
                nameList.filter((cities) =>
                  cities.name.toLowerCase().startsWith(filter.toLowerCase())
                )
              );
            } else {
              setFilteredNames([]);
              setFilter('Rechercher');
            }
          }}
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
        <div className={styles.searchBarResultsName}>
          {filteredNames.map((user) => (
            <div key={user.insee} className={styles.searchBarResultsNameReal}>
              {user.name}
            </div>
          ))}
        </div>
        <div className={styles.searchBarResultsButton}>
          <Button
            text='Annuler'
            color='#7696C7'
            onClick={() => {
              HandleClickInput();
              setFilter('');
            }}
          />
          <Button
            text='Rechercher'
            color='#2F4C77'
            onClick={() => {
              if (filter !== '') {
                setFilteredNames(
                  nameList.filter((cities) =>
                    cities.name.toLowerCase().startsWith(filter.toLowerCase())
                  )
                );
              } else {
                setFilteredNames([]);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
