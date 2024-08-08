import './App.css';
import { Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import Blog from './components/Blog.js';

function App() {
  return (
    <div className="App">
      <nav className='navbar'>
          <Link to='/'>Home</Link>
          <Link to='/blog'>Blog</Link>
          <Link to='/contact'>Contact</Link>        
      </nav>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>

        </Routes>
    </div>
  );
}

export default App;
