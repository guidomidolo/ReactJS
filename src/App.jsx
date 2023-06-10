import './App.css';
import './components/fonts/RazerF5.otf'
import Header from './components/Header';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import BannerBottom from './components/BannerBottom';
import BannerTop from './components/BannerTop';
import CallToAction from './components/CallToAction';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error404 from './components/Error404';
import CartContextProvider from './context/CartContext';


function App() {
  return (
    <div>
      <CartContextProvider>
      <BrowserRouter>
    
      <Header />
      <CallToAction />
      <BannerTop />

      <Routes>      
      <Route path={"/"} element={<ItemListContainer />} />
      <Route path={"/category/:id"} element={<ItemListContainer />} />
      <Route path={"/item/:id"} element={<ItemDetailContainer />} />
      <Route path={"/*"} element={<Error404 />} />
      </Routes>

      <BannerBottom />
      <Footer />
      </BrowserRouter> 
      </CartContextProvider>

    </div>
  );
}

export default App;
