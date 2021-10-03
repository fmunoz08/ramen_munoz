
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);

  function addcart(number) {
    setNumber(number)
  }

  return (
    <div className="App">
      <NavBar number={number}/>
      <h1> RAMEN RANTARO</h1>
      <ItemListContainer addcart={(number) => addcart(number)} greeting="ITEM LIST CONTAINER WIP"/>
    </div>
  );
}

export default App;
