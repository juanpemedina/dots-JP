export default function Blog() {
    return (
        <div>
            <h1>Blog de Carros</h1>
            <div className='filter'>
                <p>Buscar por titulo</p>
                <input type='text' value={filterText} onChange={handleChange}></input>
            </div>
            <CardList posts={data} text={filterText}></CardList>
        </div>
    )
}