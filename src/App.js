
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Item/ItemListContainer';
import Cart from './components/Cart/Cart';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './CartContext'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Purchase from './components/Purchase/Purchase';



function App() {

  return (
    <CartProvider>
      <Router>
        <div className="App">
          <h1> Ramen Rantaro</h1>
          <NavBar />
          <Switch>
            <Route path={"/"} exact render={(props) => (<ItemListContainer path="/" />)} />
            <Route path={"/category/:id"} exact render={(props) => (<ItemListContainer path={window.location.pathname.split("/")[2]} />)} />
            <Route path={"/item/:id"} render={(props) => (<ItemDetailContainer />)} />
            <Route path={"/cart/"} render={(props) => (<Cart />)} />
            <Route path={"/purchase/"} render={(props) => ( <Purchase />)}/>
          </Switch>

        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
