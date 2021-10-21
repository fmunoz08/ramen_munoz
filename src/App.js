
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Item/ItemListContainer';
import Cart from './components/Cart/Cart';
import { useEffect, useState } from 'react';
import { Route, Switch,BrowserRouter as Router } from 'react-router-dom';

import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';


function App() {
  const [number, setNumber] = useState(0);

  function addcart(number) {
    setNumber(number)
  }

  useEffect(() => {
  }, []);

  return (
    <Router>
      <div className="App">
        <NavBar number={number} />
        <h1> Ramen Rantaro</h1>
        <h1> Nuestros Productos </h1>
        <Switch>
          <Route path={"/"} exact render={(props) => (<ItemListContainer path="getData" addcart={addcart} />)} />
          <Route path={"/category/:id"} exact render={(props) => (<ItemListContainer path={window.location.pathname.split("/")[2]} addcart={addcart} />)} />
          <Route path={"/item/:id"} render={(props) => (<ItemDetailContainer addcart={addcart} />)} />
          <Route path={"/cart/"} render={(props) => (<Cart/> )} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
