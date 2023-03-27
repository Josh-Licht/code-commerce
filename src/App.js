import React from 'react';
import Toggle from './components/Toggle/Toggle';
import Cart from './components/Cart/Cart';
// import Shipping from './components/Shipping';
// import Payment from './components/Payment';
// import Confirmation from './components/Confirmation';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleLoginSuccess = () => {
    this.setState({ isLoggedIn: true });
  }

  render() {
    return (
      <div className="App">
        {!this.state.isLoggedIn ? <Toggle onLoginSuccess={this.handleLoginSuccess} /> : <Cart />}
      </div>
    );
  }
}

export default App;
