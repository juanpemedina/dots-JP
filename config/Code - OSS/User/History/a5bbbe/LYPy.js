import { data } from '../data.js';
import { CardList } from './Card.js';
import { useEffect, useState } from'react';

export default function Blog() {
    const [filterText, setFilterText] = useState('');
    const [data, setData] = useState([{id_post: 0, title:"", date:"" , text:"", image:"", id_author:0}]);

  useEffect(() => {
    fetch("http://localhost:8000/posts")
      .then((res) => res.json())
      .then((posts) => setData(posts));
  }, []);

    function handleChange(e) {
      setFilterText(e.target.value);
    }

    return (
        <>
            <h1>Blog de Carros</h1>
            <div className='filter'>
                <p>Buscar por titulo</p>
                <input type='text' value={filterText} onChange={handleChange}></input>
            </div>
            <CardList posts={data} text={filterText}></CardList>
        </>
    )
}