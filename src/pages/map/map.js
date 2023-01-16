import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Maps from '../../components/Maps/Maps'

export default function Map() {
  return (
    <div className='App'>
      <Header />
      <div className='main'>
        <Maps />
      </div>
      <Footer side='left'/>
    </div>
  );
}