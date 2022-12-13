import './App.css';
import CartList from './containers/CartList';
import GoodList from './containers/GoodList';


function App() {
  return (
    <div className="container">
      <GoodList /> 
      <CartList/>
    </div>
  );
}

export default App;
