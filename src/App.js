import './default.scss';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='main'>
        <SearchBar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
