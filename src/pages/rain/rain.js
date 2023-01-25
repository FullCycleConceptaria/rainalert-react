import Weather from '../../components/Weather/Weather';
import SearchBar from '../../components/SearchBar/SearchBar';
import Hours from '../../components/Hours/Hours';
import Chart from '../../components/Chart/Chart';
import { useContext } from 'react';
import { ContextData } from '../../context/ContextData';

export default function Rain() {
  const MyContext = ContextData();
  const [nameList, loading, error, token] = useContext(MyContext);
  return (
    <>
      <SearchBar nameList={nameList} token={token} />
      <Weather />
      <Chart />
      <Hours />
    </>
  );
}
