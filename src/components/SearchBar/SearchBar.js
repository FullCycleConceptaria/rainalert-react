import styles from './SearchBar.module.scss';
import Button from '../Button/Button';
import { useHandleClickInput } from '../../hooks/useHandleClickInput';
import { useState } from 'react';
import useChart from '../../hooks/useChart';

export default function SearchBar({ nameList, token }) {
  const [arrayHourlyBuild, arrayHourly] = useChart();

  function HandleClickName(e, lat, long, insee) {
    fetch(
      `https://api.meteo-concept.com/api/forecast/nextHours?token=${token}&latlng=${lat}%2C${long}&insee=${insee}&hourly=true`
    )
      .then((res) => res.json())
      .then((json) => arrayHourlyBuild(
      json.forecast[0].datetime.slice(11, 16),
      json.forecast[0].rr10,
      json.forecast[1].datetime.slice(11, 16),
      json.forecast[1].rr10,
      json.forecast[2].datetime.slice(11, 16),
      json.forecast[2].rr10,
      json.forecast[3].datetime.slice(11, 16),
      json.forecast[3].rr10,
      json.forecast[4].datetime.slice(11, 16),
      json.forecast[4].rr10
    )); 
  }

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
            <div
              key={user.insee}
              className={styles.searchBarResultsNameReal}
              onClick={(e) => {
                HandleClickName(e, user.latitude, user.longitude, user.insee);
              }}
            >
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
