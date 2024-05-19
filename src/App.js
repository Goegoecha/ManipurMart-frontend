import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import foods_banner from './Components/Assets/banner_foods.png';
import handloom_banner from './Components/Assets/banner_handloom.png';
import handicraft_banner from './Components/Assets/banner_handicraft.png';
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/foods' element={<ShopCategory banner={foods_banner} category="manipur_foods" />} />
          <Route path='/handloom' element={<ShopCategory banner={handloom_banner} category="manipur_handloom" />} />
          <Route path='/handicraft' element={<ShopCategory banner={handicraft_banner} category="manipur_handicraft" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
