import './App.css';
import {data} from './data';
import { CardList } from './Card';
import { useState } from 'react';

function App() {
  const [filterText, setFilterText] = useState('');
  return (
    <div className="App">
      <h1>Blog de Carros</h1>
      <div>
        <p>Buscar por titulo</p>
        <input type='text'></input>
      </div>
      <CardList posts={data}></CardList>
    </div>
  );
}

export default App;
