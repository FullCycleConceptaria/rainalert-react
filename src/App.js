import './default.scss';

import Footer from './components/Footer/Footer';
import Weather from './components/Weather/Weather';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='main'>
        <Weather />
      </div>
      <Footer />
    </div>
  );
}

export default App;
