import './App.css';
import './components/fonts/RazerF5.otf'
import Header from './components/Header';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import BannerBottom from './components/BannerBottom';
import CallToAction from './components/CallToAction';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BannerTop from './components/BannerTop';

function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Header />
      <CallToAction />
      <BannerTop />

      <Routes>      
      <Route path={"/"} element={<ItemListContainer />} />
      <Route path={"/category/:id"} element={<ItemListContainer />} />
      <Route path={"/item/:id"} element={<ItemDetailContainer />} />
      </Routes>

      <BannerBottom />
      <Footer />
      </BrowserRouter> 

    </div>
  );
}

export default App;
