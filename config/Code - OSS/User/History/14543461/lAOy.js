import './App.css';
import {data} from './data';
import { CardList } from './Card';

function App() {
  return (
    <div className="App">
      <h1>Blog de Carros</h1>
      <div>
        <p></p>
        <input type='text'></input>
      </div>
      <CardList posts={data}></CardList>
    </div>
  );
}

export default App;
