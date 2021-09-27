
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1> RAMEN RANTARO</h1>
      <ItemListContainer/>
    </div>
  );
}

export default App;
