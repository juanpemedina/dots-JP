import './App.css';
import {data} from './data';
import { CardList } from './Card';

function App() {
  return (
    <div className="App">
      <h1>Blog de Carros</h1>
      <CardList posts={data}></CardList>
    </div>
  );
}

export default App;
