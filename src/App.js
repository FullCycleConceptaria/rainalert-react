import './default.scss';

import Footer from './components/Footer/Footer';
import Weather from './components/Weather/Weather';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='main'>
        <SearchBar />
        <Weather />
      </div>
      <Footer />
    </div>
  );
}

export default App;
