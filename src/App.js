import './default.scss';

import Footer from './components/Footer/Footer';
import Weather from './components/Weather/Weather';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Hours from './components/Hours/Hours';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='main'>
        <SearchBar />
        <Weather />
        <Hours />
      </div>
      <Footer />
    </div>
  );
}

export default App;
