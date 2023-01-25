import { useEffect, useState } from 'react';

function useFetchDatas(url, datas) {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    async function fetchDataList() {
      setLoading(true);
      try {
        const response = await fetch(url);
        const json = await response.json();
        if (response.ok) {
          setDataList(json[datas]);
        } else {
          console.log('ERREUR');
        }
      } catch (e) {
        console.log('ERREUR', e);
        setError(`ERREUR: ${e}`);
      } finally {
        setLoading(false);
      }
    }
    fetchDataList();
  }, []);

  return [dataList, loading, error];
}

export { useFetchDatas };
