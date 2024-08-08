import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Blog from './components/Blog';

function App() {


  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>

        </Routes>
    </div>
  );
}

export default App;
