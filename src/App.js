import './default.scss';

import Footer from './components/Footer/Footer';
import Weather from './components/Weather/Weather';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Chart from './components/Chart/Chart'

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='main'>
        <SearchBar />
        <Weather />
        <Chart />
      </div>
      <Footer />
    </div>
  );
}

export default App;
