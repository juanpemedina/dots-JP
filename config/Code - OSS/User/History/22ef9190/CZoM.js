import { Link } from "react-router-dom";

export function Card({image, title, date, id_post}) {
    return(
      <Link to={"/blog/"+id_post}>
        <div className='card'>
          {image && <img src={require("../images/"+image+".png")} alt='/'></img>}
          <h2>{title}</h2>
          <p>{date}</p>
        </div>
      </Link>

    );
  }
  
  export function CardList({posts, text}) {
    const lista = posts.map(post =>
        post.title.includes(text) &&          
         <Card title={post.title} date={post.date} image={post.image} key={post.id}></Card>)
    return(
    <div className='card-list'>
      {lista}
    </div>
    );
  }