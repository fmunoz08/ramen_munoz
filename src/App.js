
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Item/ItemListContainer';
import Cart from './components/Cart/Cart';
import { useEffect, useState } from 'react';
import { Route, Switch,BrowserRouter as Router } from 'react-router-dom';
import { CartProvider} from './CartContext'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';


function App() {


  useEffect(() => {
  }, []);

  return (
    <CartProvider>
    <Router>
      <div className="App">
        <NavBar/>
        <h1> Ramen Rantaro</h1>
        <h1> Nuestros Productos </h1>
        <Switch>
          <Route path={"/"} exact render={(props) => (<ItemListContainer path="getData" />)} />
          <Route path={"/category/:id"} exact render={(props) => (<ItemListContainer path={window.location.pathname.split("/")[2]} />)} />
          <Route path={"/item/:id"} render={(props) => (<ItemDetailContainer />)} />
          <Route path={"/cart/"} render={(props) => (<Cart/> )} />
        </Switch>

      </div>
    </Router>
    </CartProvider>
  );
}

export default App;
