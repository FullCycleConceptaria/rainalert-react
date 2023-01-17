import './default.scss';

import Footer from './components/Footer/Footer';
import Weather from './components/Weather/Weather';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Hours from './components/Hours/Hours';
import Chart from './components/Chart/Chart';
import Loading from './components/Loading/Loading'

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='main'>
        <SearchBar />
        <Weather />
        <Chart />
        <Hours />
      </div>
      <Footer />
    </div>
  );
}

export default App;
