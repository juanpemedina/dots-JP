import './App.css';
import {data} from './data';
import { CardList } from './Card';
import { useState } from 'react';

function App() {
  const [filterText, setFilterText] = useState('');

  function handleChange(e) {
    setFilterText(e.target.value);
  }

  return (
    <div className="App">
      <h1>Blog de Carros</h1>
      <div>
        <p>Buscar por titulo</p>
        <input type='text' value={filterText} onChange={handleChange}></input>
      </div>
      <CardList posts={data} text={filterText}></CardList>
    </div>
  );
}

export default App;
