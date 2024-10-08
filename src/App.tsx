import Checkout from './pages/Checkout';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Checkout2 from './pages/Checkout2';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Context/GlobalContext';
import ProductListing from './pages/ProductListing';
import Success from './pages/Success';
import AddAddress from './pages/AddAddress';
import PaymentMethod from './pages/PaymentMethod';

function App() {
  return (
    <CartProvider>
    <div className="App">
    <Router>
      <Routes>
    <Route path="/" element={<Home />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='/checkout' element={<Checkout />} />
    <Route path='/checkout2' element={<Checkout2 />} />
    <Route path='/addaddress' element={<AddAddress />} />
    <Route path='/productlisting' element={<ProductListing />} />
    <Route path='/paymentmethod' element={<PaymentMethod />} />
    <Route path="success" element={<Success />} />
    </Routes>
    </Router>
    </div>
    </CartProvider>
  );
}

export default App;
