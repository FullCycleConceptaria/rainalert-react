import './default.scss';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import { Outlet } from 'react-router-dom';
import Error from './components/Error/Error';
import { useContext } from 'react';
import { ContextData } from './context/ContextData';

function App() {
  const MyContext = ContextData();
  const [nameList, loading, error] = useContext(MyContext);
  return (
    <div className='App'>
      {error && <Error />}
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <div className='main'>
            <Outlet />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
