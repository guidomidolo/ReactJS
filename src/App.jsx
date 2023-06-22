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
import Cart from './components/Cart';


function App() {
  return (
    <div>
      <CartContextProvider>
      <BrowserRouter>
    
      <Header />
      <CallToAction />

      <Routes>      
      <Route path={"/"} element={<ItemListContainer />} />
      <Route path={"/category/:id"} element={<ItemListContainer />} />
      <Route path={"/item/:id"} element={<ItemDetailContainer />} />
      <Route path={"/*"} element={<Error404 />} />
      <Route path={"/cart"} element={<Cart />} />
      </Routes>

      <BannerBottom />
      <Footer />
      </BrowserRouter> 
      </CartContextProvider>

    </div>
  );
}

export default App;
