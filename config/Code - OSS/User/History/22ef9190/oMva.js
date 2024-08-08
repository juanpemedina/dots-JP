export function Card({image, title, date}) {
    return(
      <div className='card'>
        {image && <img src={require("../images/"+image+".png")} alt='/'></img>}
        <h2>{title}</h2>
        <p>{date}</p>
      </div>
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