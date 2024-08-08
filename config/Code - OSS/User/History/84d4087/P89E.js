import data from '../data';
import { CardList } from './Card.js';
import { useState } from'react';

export default function Blog() {
    const [filterText, setFilterText] = useState('');

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