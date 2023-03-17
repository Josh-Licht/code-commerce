import './App.css';
import Signup from './components/Signup';
import Cart from './components/Cart';
import Shipping from './components/Shipping';
import Payment from './components/Payment';
import Confirmation from './components/Confirmation';


function App() {
  return (
    <div className="App">
      <Signup />
      <Cart />
      <Shipping />
      <Payment />
      <Confirmation />
    </div>
  );
}

export default App;
