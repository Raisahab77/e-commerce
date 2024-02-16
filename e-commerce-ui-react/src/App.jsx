import './App.css';
import Navbar from './component/navbar/navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Shop from './pages/shop';
import Cart from './pages/cart';
import ShopCategory from './pages/shopCategory';
import Product from './pages/product';
import Footer from './component/footer/footer';
import banner_mens from './Assets/banner_mens.png'
import banner_womens from './Assets/banner_women.png'
import banner_kids from './Assets/banner_kids.png'
import LoginSignup from './pages/loginSignup';

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path='/men' element={<ShopCategory banner={banner_mens} category="men"/>} />
          <Route path='/women' element={<ShopCategory banner={banner_womens} category="women"/>} />
          <Route path='/kids' element={<ShopCategory banner={banner_kids} category="kids"/>} />
          <Route path='/login' element={<LoginSignup/>} />
        </Routes>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
