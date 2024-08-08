import './App.css';
import {data} from './data';
import { CardList } from './components/Card';
import { useState } from 'react';

function App() {
  const [filterText, setFilterText] = useState('');

  function handleChange(e) {
    setFilterText(e.target.value);
  }

  return (
    <div className="App">
      <h1>Blog de Carros</h1>

    </div>
  );
}

export default App;
