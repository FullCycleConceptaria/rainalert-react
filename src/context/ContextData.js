import { createContext } from 'react';
import { useFetchDatas } from '../hooks/useFetchDatas';

function ContextData() {
  // const token =
  //   '958a67f8bac8fdeb02fa6bcba287ba86d1b918995a9cede0ffcb80ca7c1a65a5';
  const token =
    '6f0b4550893f9d5bc0ca86b7ce3ed3b583cf8a36e35c8266813c0fd919f99590';
  const [userList, loading, error] = useFetchDatas(
    `https://api.meteo-concept.com/api/location/cities?token=${token}&search=''`,
    'cities'
  );
  const MyContext = createContext([userList, loading, error]);
  return MyContext;
}
export { ContextData };
