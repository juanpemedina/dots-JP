import './App.css';
import {data} from './data';


function Card({image, title, date}) {
  return(
    <div className='card'>
      <img src={require("./images/"+image+".png")} alt='/'></img>
      <h2>{title}</h2>
      <p>{date}</p>
    </div>
  );
}

function CardList({posts}) {
  const lista = posts.map(post => <Card title={post.title} date={post.date} image={post.image} ></Card>)
  return(
  <div className='card-list'>
    {lista}
  </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Blog de Carros</h1>
      <CardList posts={data}></CardList>
    </div>
  );
}

export default App;
