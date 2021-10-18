
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  const [number, setNumber] = useState(0);

  function addcart(number) {
    setNumber(number)
  }

  useEffect(() => {
    console.log();
  },[]);

  return (
    <Router>
      <div className="App">
      <NavBar number={number}/>
      <Switch>
        <Route path={"/"} exact render={(props) => ( <ItemListContainer path="getData" addcart={addcart}/> )} />
        <Route path={"/category/:id"} exact render={(props) => ( <ItemListContainer path={window.location.pathname.split("/")[2] } addcart={addcart}/> )} />
        <Route path={"/item/:id"} render={(props) => ( <ItemDetailContainer addcart={addcart}/> )} />
      </Switch> 
      
    </div>
    </Router>
  );
}

export default App;
