import './App.css';
import { Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import Blog from './components/Blog.js';
import Post from './components/Post.js';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/blog/:id_post" element={<Post />}></Route>
      </Routes>
    </div>
  );
}

export default App;
